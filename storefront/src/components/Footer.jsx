import { Link } from 'react-router-dom';
import BrandText from './BrandText';

export default function Footer() {
  return (
    <footer>
        <div className="footer-grid">
            <div>
                <h2 style={{color: "#0f172a", marginBottom: "0.35rem", display: "flex", alignItems: "center", gap: "8px"}}>
                  <img src="/assets/images/logo.png" alt="Logo" style={{height: "44px", width: "44px", borderRadius: "50%", objectFit: "cover"}} onError={(e) => { e.target.src = "/assets/images/logo.svg"; }} />
                  <BrandText mode="inline" size="normal" theme="dark" />
                </h2>
                <p className="footer-brand-desc">Curating the world's most exceptional handmade artifacts for the discerning modern home since 2026.</p>
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
