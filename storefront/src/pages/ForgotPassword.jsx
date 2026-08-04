import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/login.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Add real password reset logic here
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

        <h2 className="login-welcome-title">Reset Password</h2>
        <p className="login-subtitle">We will send you a reset link</p>

        {submitted ? (
          <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.7)', padding: '2rem', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <h3 style={{ color: '#1e3a8a', margin: '0 0 0.5rem 0' }}>Link Sent!</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', margin: '0 0 1.5rem 0' }}>Please check your email for instructions.</p>
            <Link to="/login" className="login-submit-btn" style={{ textDecoration: 'none' }}>
              Return to Login
            </Link>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="login-submit-btn" style={{ marginTop: '0.5rem' }}>
              Send Reset Link
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </form>
        )}

        <div className="login-bottom-text">
          Remember your password? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
