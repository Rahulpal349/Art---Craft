/**
 * handlers/auth.js
 *
 * AWS Lambda handler for Auth — wraps Amazon Cognito.
 * Replaces supabase.auth.signInWithPassword / signUp / signOut / getSession.
 *
 * Routes:
 *   POST /auth/login    → email+password → returns AccessToken + IdToken
 *   POST /auth/signup   → email+password+name → creates Cognito user
 *   POST /auth/logout   → invalidates Cognito tokens
 *   GET  /auth/session  → validates token, returns user info
 */
const {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  SignUpCommand,
  GlobalSignOutCommand,
  GetUserCommand,
  ConfirmSignUpCommand,
} = require('@aws-sdk/client-cognito-identity-provider');

const cognito = new CognitoIdentityProviderClient({
  region: process.env.REGION || 'ap-southeast-2',
});

const CLIENT_ID = process.env.COGNITO_CLIENT_ID;

// ─── Helpers ────────────────────────────────────────────────────────────────

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    },
    body: JSON.stringify(body),
  };
}

function parseBody(event) {
  try {
    return event.body ? JSON.parse(event.body) : {};
  } catch {
    return {};
  }
}

function getToken(event) {
  const auth = event.headers?.authorization || event.headers?.Authorization || '';
  return auth.replace(/^Bearer\s+/i, '');
}

// ─── Route handlers ─────────────────────────────────────────────────────────

async function login(event) {
  const { email, password } = parseBody(event);
  if (!email || !password) return response(400, { error: 'Email and password are required' });

  try {
    const { AuthenticationResult } = await cognito.send(new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: CLIENT_ID,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    }));

    return response(200, {
      accessToken: AuthenticationResult.AccessToken,
      idToken: AuthenticationResult.IdToken,
      refreshToken: AuthenticationResult.RefreshToken,
      expiresIn: AuthenticationResult.ExpiresIn,
    });
  } catch (err) {
    const code = err.name;
    if (code === 'NotAuthorizedException' || code === 'UserNotFoundException') {
      return response(401, { error: 'Invalid email or password' });
    }
    if (code === 'UserNotConfirmedException') {
      return response(403, { error: 'Please verify your email before logging in' });
    }
    throw err;
  }
}

async function signup(event) {
  const { email, password, name } = parseBody(event);
  if (!email || !password) return response(400, { error: 'Email and password are required' });

  try {
    await cognito.send(new SignUpCommand({
      ClientId: CLIENT_ID,
      Username: email,
      Password: password,
      UserAttributes: name ? [{ Name: 'name', Value: name }] : [],
    }));

    return response(200, {
      success: true,
      message: 'Account created. Please check your email to verify your account.',
    });
  } catch (err) {
    if (err.name === 'UsernameExistsException') {
      return response(409, { error: 'An account with this email already exists' });
    }
    if (err.name === 'InvalidPasswordException') {
      return response(400, { error: err.message });
    }
    throw err;
  }
}

async function logout(event) {
  const token = getToken(event);
  if (!token) return response(400, { error: 'No access token provided' });

  await cognito.send(new GlobalSignOutCommand({ AccessToken: token }));
  return response(200, { success: true });
}

async function getSession(event) {
  const token = getToken(event);
  if (!token) return response(401, { error: 'No access token' });

  try {
    const { UserAttributes } = await cognito.send(new GetUserCommand({ AccessToken: token }));

    // Convert Cognito attribute array to a plain object
    const user = {};
    UserAttributes.forEach(({ Name, Value }) => {
      user[Name.replace('custom:', '')] = Value;
    });

    return response(200, {
      id: user.sub,
      email: user.email,
      name: user.name || null,
    });
  } catch (err) {
    if (err.name === 'NotAuthorizedException') {
      return response(401, { error: 'Token expired or invalid' });
    }
    throw err;
  }
}

// ─── Main Lambda Handler ─────────────────────────────────────────────────────

exports.handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;
  const rawPath = event.rawPath || event.requestContext?.http?.path || event.path || '';
  const path = rawPath.replace(/\/+$/, '');

  try {
    if (method === 'POST' && path.endsWith('/auth/login'))   return await login(event);
    if (method === 'POST' && path.endsWith('/auth/signup'))  return await signup(event);
    if (method === 'POST' && path.endsWith('/auth/logout'))  return await logout(event);
    if (method === 'GET'  && path.endsWith('/auth/session')) return await getSession(event);

    return response(404, { error: `Not found: ${method} ${path}` });
  } catch (err) {
    console.error('Auth handler error:', err);
    return response(500, { error: 'Internal server error', detail: err.message });
  }
};
