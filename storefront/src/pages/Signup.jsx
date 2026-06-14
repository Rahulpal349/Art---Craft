import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name').value;
    // Fake sign up logic
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userName', nameInput || 'Artisan');
    // Navigate to User Dashboard (Curator Portal)
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <h2>Join the Gallery</h2>
      <p className="subtitle">
        Create an account to start collecting
      </p>

      <form onSubmit={handleSignup}>
        <div className="auth-form-group">
          <label htmlFor="name">Full Name</label>
          <div className="auth-input-wrapper">
            <input type="text" id="name" className="auth-input" placeholder="Your Name" required />
          </div>
        </div>

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
          <div className="auth-checkbox-group" style={{ marginBottom: 0 }}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the Terms & Privacy Policy</label>
          </div>
        </div>

        <button type="submit" className="auth-btn">Sign Up</button>

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
