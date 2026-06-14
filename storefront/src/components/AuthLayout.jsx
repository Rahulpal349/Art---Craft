import { Link } from 'react-router-dom';
import '../auth.css';

export default function AuthLayout({ children, leftImage, leftQuote, showTag }) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <Link to="/">
          Artisanat Gallery
        </Link>
      </div>
      
      <div className="auth-content">
        {leftImage && (
          <div className="auth-side-image">
            <img src={leftImage} alt="Art piece" />
            {leftQuote && <p className="auth-quote">"{leftQuote}"</p>}
          </div>
        )}
        
        <div className="auth-card-container">
          <div className="auth-card">
            {showTag && (
              <div className="auth-tag">
                Hand-built<br/>Legacy
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
      
      <div className="auth-footer">
        <div>&copy; 2024 Artisanat Gallery. Hand-built for the discerning collector.</div>
        <div className="auth-footer-links">
          <Link to="/privacy-policy">PRIVACY POLICY</Link>
          <Link to="/terms">TERMS OF SERVICE</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
}
