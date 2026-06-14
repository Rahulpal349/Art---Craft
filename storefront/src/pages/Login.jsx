import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
  return (
    <AuthLayout 
      leftImage="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=600&auto=format&fit=crop"
    >
      <h2>Welcome Back</h2>
      <p className="subtitle">
        Sign in to manage your collection.
      </p>

      <form>
        <div className="auth-form-group">
          <label htmlFor="email">Email Address</label>
          <div className="auth-input-wrapper">
            <input type="email" id="email" className="auth-input" placeholder="collector@artandcraft.com" />
          </div>
        </div>

        <div className="auth-form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
            <label htmlFor="password" style={{ marginBottom: 0 }}>Password</label>
            <Link to="/forgot-password" style={{ fontSize: '0.75rem', color: '#3b82f6', textDecoration: 'none' }}>
              FORGOT PASSWORD?
            </Link>
          </div>
          <div className="auth-input-wrapper">
            <input type="password" id="password" className="auth-input" placeholder="••••••••" />
            <span className="auth-input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
        </div>

        <div className="auth-checkbox-group" style={{ marginBottom: '2rem' }}>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">
            Remember me for 30 days
          </label>
        </div>

        <button type="button" className="auth-btn">Sign In</button>
      </form>

      <div className="auth-links" style={{ borderTop: '1px solid #e2e8f0', marginTop: '2.5rem', paddingTop: '2.5rem' }}>
        New to the Gallery? <Link to="/signup">Create an Account</Link>
      </div>
    </AuthLayout>
  );
}
