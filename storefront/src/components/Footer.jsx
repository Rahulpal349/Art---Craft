import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="footer-grid">
            <div>
                <h2 style={{color: "var(--white)", marginBottom: "1rem"}}>
                  <img src="/assets/images/logo.svg" alt="Logo" style={{height: "32px", verticalAlign: "middle", marginRight: "8px"}} />
                  Art & Craft
                </h2>
                <p style={{color: "#cbd5e1"}}>Curating the world's most exceptional handmade artifacts for the discerning modern home since 2024.</p>
            </div>
            <div>
                <h4>Shop</h4>
                <Link to="/collections">All Products</Link>
                <Link to="#">New Arrivals</Link>
                <Link to="#">Best Sellers</Link>
            </div>
            <div>
                <h4>Support</h4>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/bulk-orders">Bulk Orders</Link>
            </div>
            <div>
                <h4>Legal</h4>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/refund-policy">Refund Policy</Link>
            </div>
        </div>
        <div className="copyright">
            &copy; 2026 Art & Craft Gallery. All rights reserved.
        </div>
    </footer>
  );
}
