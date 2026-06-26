import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { success, error: signupError } = await signup(email, password, name);
    if (success) {
      navigate('/dashboard');
    } else {
      setError(signupError || 'Signup failed');
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <h2>Join the Gallery</h2>
      <p className="subtitle">
        Create an account to start collecting
      </p>

      <form onSubmit={handleSignup}>
        {error && <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{error}</div>}
        <div className="auth-form-group">
          <label htmlFor="name">Full Name</label>
          <div className="auth-input-wrapper">
            <input 
              type="text" 
              id="name" 
              className="auth-input" 
              placeholder="Your Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
        </div>

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
          <div className="auth-checkbox-group" style={{ marginBottom: 0 }}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Privacy Policy</label>
          </div>
        </div>

        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>

        <div className="auth-divider">OR</div>

        <button type="button" className="auth-btn auth-btn-google">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" />
          Sign up with Google
        </button>
      </form>

      <div className="auth-links">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </AuthLayout>
  );
}
