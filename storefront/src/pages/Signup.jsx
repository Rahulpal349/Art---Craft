import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../assets/styles/login.css';

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      setError(signupError || 'Failed to create account');
      setLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <Link to="/" className="login-back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        <span className="login-back-text">Back to Home</span>
      </Link>

      {/* Decorative watercolor splashes */}
      <div className="login-decor login-decor-top-left"></div>
      <div className="login-decor login-decor-bottom-right"></div>
      <div className="login-decor login-decor-bottom-left"></div>

      <div className="login-content">
        
        <div className="login-logo-section">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="/assets/images/logo.png" alt="Art & Craft Logo" className="login-logo-img" onError={(e) => { e.target.src = "/assets/images/logo.svg"; }} />
            <h1 className="login-brand-title">Art & Craft</h1>
            <p className="login-brand-subtitle">• ART IN YOUR HOME •</p>
          </Link>
        </div>

        <h2 className="login-welcome-title">Create Account</h2>
        <p className="login-subtitle">Join us to start curating your collection</p>

        <form className="login-form" onSubmit={handleSignup}>
          {error && <div style={{ color: 'red', fontSize: '0.9rem', textAlign: 'left' }}>{error}</div>}
          
          <div className="login-input-group">
            <svg className="login-input-icon-left" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            <input 
              type="text" 
              className="login-input" 
              placeholder="Full Name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

          <div className="login-input-group">
            <svg className="login-input-icon-left" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <input 
              type="email" 
              className="login-input" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="login-input-group">
            <svg className="login-input-icon-left" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            <input 
              type={showPassword ? "text" : "password"} 
              className="login-input" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <svg 
              className="login-input-icon-right" 
              onClick={() => setShowPassword(!showPassword)}
              xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>

          <button type="submit" className="login-submit-btn" disabled={loading} style={{ marginTop: '0.5rem' }}>
            {loading ? 'Creating Account...' : 'Sign Up'}
            {!loading && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>}
          </button>

          <div className="login-divider">OR</div>

          <button type="button" className="login-social-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" />
            Continue with Google
          </button>
        </form>

        <div className="login-bottom-text">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
