import { Link } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';

export default function Signup() {
  return (
    <AuthLayout 
      leftImage="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop"
      leftQuote="Beauty lies in the deliberate imperfection of the hand."
      showTag={true}
    >
      <h2>Join the Gallery</h2>
      <p className="subtitle">
        Begin your journey into a world of curated craftsmanship and rare finds.
      </p>

      <form>
        <div className="auth-form-group">
          <label htmlFor="fullname">Full Name</label>
          <div className="auth-input-wrapper">
            <input type="text" id="fullname" className="auth-input" placeholder="Elias Thorne" />
          </div>
        </div>

        <div className="auth-form-group">
          <label htmlFor="email">Email Address</label>
          <div className="auth-input-wrapper">
            <input type="email" id="email" className="auth-input" placeholder="elias@example.com" />
          </div>
        </div>

        <div className="auth-form-group">
          <label htmlFor="password">Password</label>
          <div className="auth-input-wrapper">
            <input type="password" id="password" className="auth-input" placeholder="••••••••" />
            <span className="auth-input-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </span>
          </div>
        </div>

        <div className="auth-checkbox-group">
          <input type="checkbox" id="newsletter" />
          <label htmlFor="newsletter">
            Subscribe to our artisanal newsletter for exclusive collection previews and artist stories.
          </label>
        </div>

        <div className="auth-checkbox-group" style={{ marginBottom: '2rem' }}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link> and Privacy Policy.
          </label>
        </div>

        <button type="button" className="auth-btn">Create Account</button>
      </form>

      <div className="auth-links">
        Already a member? <Link to="/login">Sign In</Link>
      </div>
    </AuthLayout>
  );
}
