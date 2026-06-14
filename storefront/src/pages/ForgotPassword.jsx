import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <h2>Reset Password</h2>
      <p className="subtitle">
        Enter your email address and we will send you a reset link
      </p>

      <form>
        <div className="auth-form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="email">Email</label>
          <div className="auth-input-wrapper">
            <input type="email" id="email" className="auth-input" placeholder="your@email.com" />
          </div>
        </div>

        <button type="button" className="auth-btn">
          Send Reset Link
        </button>
      </form>

      <div className="auth-links" style={{ marginTop: '2.5rem' }}>
        <Link to="/login">&lt; Back to Log In</Link>
      </div>
    </AuthLayout>
  );
}
