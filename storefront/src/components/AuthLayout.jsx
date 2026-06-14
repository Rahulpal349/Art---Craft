import { Link } from 'react-router-dom';
import '../auth.css';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-card-split">
        {/* Left Side: Brand & Illustration */}
        <div className="auth-left-panel">
          <div className="auth-brand">
            <Link to="/">
              <img src="/assets/images/logo.svg" alt="Art & Craft Logo" className="auth-logo-svg" />
              ART & CRAFT
            </Link>
          </div>
          <div className="auth-illustration-container">
            <img src="/assets/images/auth_illustration.png" alt="Artisanal Pots Illustration" className="auth-illustration" />
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="auth-right-panel">
          <div className="auth-form-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
