import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import './Login.css';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const { success, error: loginError } = await login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError(loginError || 'Invalid email or password. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-background"></div>
      
      <div className={`login-glass-card ${isLoaded ? 'animate-in' : ''}`}>
        <div className="login-card-inner">
          <div className="login-header">
            <div className="logo-icon-wrapper">
              <ShieldCheck className="logo-icon" size={36} />
            </div>
            <h2>Admin Secure Access</h2>
            <p>Enter your credentials to access the artisan workspace</p>
          </div>
          
          {error && <div className="login-error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <div className="input-icon">
                <User size={18} />
              </div>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email Address"
                required
              />
            </div>
            
            <div className="input-group">
              <div className="input-icon">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Password"
                required
              />
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`} disabled={loading}>
              <span className="btn-text">{loading ? 'Authenticating...' : 'Sign In'}</span>
              {!loading && <ArrowRight className="btn-icon" size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
