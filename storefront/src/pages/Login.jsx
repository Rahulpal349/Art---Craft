import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { success, error: loginError } = await login(email, password);
    if (success) {
      navigate('/dashboard');
    } else {
      setError(loginError || 'Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Welcome back!</h2>
      <p className="subtitle">
        Please enter your details to sign in
      </p>

      <form onSubmit={handleLogin}>
        {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>
          <div className="auth-input-wrapper">
            <input 
              type="email" 
              id="email" 
              className="auth-input" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
        </div>

        <div className="auth-form-group">
          <label htmlFor="password">Password</label>
          <div className="auth-input-wrapper">
            <input 
              type="password" 
              id="password" 
              className="auth-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <span className="auth-input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
        </div>

        <div className="auth-options-row">
          <div className="auth-checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember for 30 days</label>
          </div>
          <Link to="/forgot-password" className="auth-forgot-link">
            Forgot password
          </Link>
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? 'Authenticating...' : 'Log In'}
        </button>

        <div className="auth-divider">OR</div>

        <button type="button" className="auth-btn auth-btn-google">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" />
          Log in with Google
        </button>
      </form>

      <div className="auth-links">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </AuthLayout>
  );
}
