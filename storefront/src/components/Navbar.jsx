import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cartItemCount } = useCart();
  
  return (
    <>
      <div className="announcement-bar">
          Free Delivery Above ₹499 | Handmade with Love
      </div>
      <nav className="navbar">
          <Link to="/" className="logo">
            <img src="/assets/images/logo.svg" alt="Logo" style={{height: "32px", verticalAlign: "middle", marginRight: "8px"}} />
            Art & Craft
          </Link>
          <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="nav-icons">
              <Link to="/login" aria-label="Account" className="icon-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </Link>
              <Link to="/cart" aria-label="Cart" className="icon-link" style={{display: "flex", alignItems: "center", gap: "4px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                  <span style={{fontSize: "0.95rem", fontWeight: 500}}>({cartItemCount})</span>
              </Link>
          </div>
      </nav>
    </>
  );
}
