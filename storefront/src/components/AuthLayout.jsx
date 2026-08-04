import { Link } from 'react-router-dom';
import '../assets/styles/auth.css';
import BrandText from './BrandText';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-card-split">
        {/* Left Side: Brand & Illustration */}
        <div className="auth-left-panel">
          <div className="auth-brand">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img src="/assets/images/logo.png" alt="Art & Craft Logo" className="auth-logo-svg" style={{height: "56px", width: "56px", borderRadius: "50%", marginRight: "12px", objectFit: "cover"}} onError={(e) => { e.target.src = "/assets/images/logo.svg"; }} />
              <BrandText mode="stacked" size="small" theme="light" />
            </Link>
          </div>
          <div className="auth-illustration-container">
            <img src="/assets/images/auth_illustration.png" alt="Artisanal Pots Illustration" className="auth-illustration" />
          </div>
        </div>

        {/* Right Side: Form Content */}
        <div className="auth-right-panel">
          <div className="auth-mobile-header">
            <Link to="/" className="auth-back-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="auth-form-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
