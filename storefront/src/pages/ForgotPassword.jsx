import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: '#f0f4f8', borderRadius: '12px', color: '#1e3a8a', marginBottom: '1.5rem' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><rect x="10" y="10" width="4" height="6" rx="1"/><path d="M12 10v-1a2 2 0 1 0-4 0v1"/></svg>
        </div>
        <h2>Reset Your Password</h2>
        <p className="subtitle" style={{ maxWidth: '320px', margin: '0 auto 2.5rem' }}>
          Enter your email address and we will send you a link to reset your password.
        </p>
      </div>

      <form>
        <div className="auth-form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="email">Email Address</label>
          <div className="auth-input-wrapper">
            <input type="email" id="email" className="auth-input" placeholder="e.g. collector@artisanat.com" />
          </div>
        </div>

        <button type="button" className="auth-btn">
          Send Reset Link
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
      </form>

      <div className="auth-links" style={{ marginTop: '2.5rem' }}>
        <Link to="/login" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          &lt; Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}
