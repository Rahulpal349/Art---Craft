/**
 * AuthContext.jsx (Admin)
 *
 * Replaces supabase.auth.* with calls to our AWS API Gateway → Cognito Lambda.
 * The API stores tokens in localStorage via tokenStore (api.js).
 */
import { createContext, useState, useContext, useEffect } from 'react';
import { api, tokenStore } from '../lib/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // On mount: restore session if we have a stored token
  useEffect(() => {
    const token = tokenStore.get();
    if (!token) {
      setLoading(false);
      return;
    }

    // Validate the stored token against Cognito via /auth/session
    api.get('/auth/session')
      .then((data) => setUser(data))
      .catch(() => {
        // Token expired or invalid — clear it
        tokenStore.clear();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * Login with email + password → Cognito USER_PASSWORD_AUTH flow.
   */
  const login = async (email, password) => {
    try {
      const data = await api.post('/auth/login', { email, password });

      // Store tokens
      tokenStore.set(data.accessToken);
      localStorage.setItem('idToken',      data.idToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Fetch user profile
      const profile = await api.get('/auth/session');
      setUser(profile);

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  /**
   * Logout — invalidates Cognito session + clears local tokens.
   */
  const logout = async () => {
    try {
      await api.post('/auth/logout', {});
    } catch {
      // Swallow — clear locally regardless
    }
    tokenStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
