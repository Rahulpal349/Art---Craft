import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import BrandText from './BrandText';

export default function Navbar() {
  const { cartItemCount } = useCart();
  const { user } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="announcement-bar">
          Products starts at Rs.99 | Free Delivery Above ₹499
      </div>
      <nav className="navbar">
          <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src="/assets/images/logo.png" alt="Logo" style={{height: "42px", width: "42px", borderRadius: "50%", objectFit: "cover"}} onError={(e) => { e.target.src = "/assets/images/logo.svg"; }} />
            <BrandText mode="inline" size="normal" />
          </Link>
          
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>

          <div className="nav-icons">
              <Link to={user ? "/dashboard" : "/login"} aria-label="Account" className="icon-link desktop-account-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </Link>
              <Link to="/cart" aria-label="Cart" className="icon-link" style={{display: "flex", alignItems: "center", gap: "4px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span style={{fontSize: "0.95rem", fontWeight: 500}}>({cartItemCount})</span>
              </Link>
              <button 
                className="mobile-menu-toggle" 
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Sidebar Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="15" y1="3" x2="15" y2="21"/>
                </svg>
              </button>
          </div>
      </nav>

      {/* Mobile Sidebar Backdrop */}
      {mobileMenuOpen && (
        <div className="sidebar-backdrop" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Slide-in Mobile Sidebar Drawer */}
      <aside className={`mobile-sidebar-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <img src="/assets/images/logo.png" alt="Logo" style={{height: "36px", width: "36px", borderRadius: "50%", objectFit: "cover"}} onError={(e) => { e.target.src = "/assets/images/logo.svg"; }} />
            <BrandText mode="inline" size="small" />
          </div>
          <button className="sidebar-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close Sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <ul className="sidebar-nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/collections">Shop</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="sidebar-account-item">
            <Link to={user ? "/dashboard" : "/login"}>
              {user ? "My Account" : "Account / Login"}
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
