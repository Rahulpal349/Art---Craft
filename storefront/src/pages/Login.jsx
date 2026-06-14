import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const nameFromEmail = emailInput ? emailInput.split('@')[0] : 'Artisan';
    // Fake login logic
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', nameFromEmail);
    // Navigate to User Dashboard (Curator Portal)
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <h2>Welcome back!</h2>
      <p className="subtitle">
        Please enter your details to sign in
      </p>

      <form onSubmit={handleLogin}>
        <div className="auth-form-group">
          <label htmlFor="email">Email</label>
          <div className="auth-input-wrapper">
            <input type="email" id="email" className="auth-input" placeholder="your@email.com" required />
          </div>
        </div>

        <div className="auth-form-group">
          <label htmlFor="password">Password</label>
          <div className="auth-input-wrapper">
            <input type="password" id="password" className="auth-input" placeholder="••••••••" required />
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

        <button type="submit" className="auth-btn">Log In</button>

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
