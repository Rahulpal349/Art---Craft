import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../assets/styles/cart.css';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const shipping = cartTotal > 499 ? 0 : 99;
  const discount = 0; // Or whatever logic if they apply coupon

  const totalAmount = cartTotal + shipping - discount;

  return (
    <div className="cart-page-container">
      {/* Decor */}
      <div className="cart-decor cart-decor-top-left"></div>
      <div className="cart-decor cart-decor-top-right"></div>

      <div className="cart-content">

        <div className="cart-header">
          <h1>My Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 15px rgba(30, 58, 138, 0.05)' }}>
            <h2 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Your cart is empty</h2>
            <p style={{ color: '#64748b', marginBottom: '2rem' }}>Looks like you haven't added any beautiful pieces yet.</p>
            <Link to="/collections" className="cart-checkout-btn" style={{ display: 'inline-flex', width: 'auto', padding: '1rem 2rem' }}>
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-grid">
            {/* Left Column (Items + Coupon) */}
            <div className="cart-main-col">
              <div className="cart-items-list">
                {cart.map(item => (
                  <div key={item.id} className="cart-item-card">
                    <img src={item.images?.[0] || item.image || item.img || 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop'} alt={item.name} className="cart-item-img" />

                    <div className="cart-item-details">
                      <div className="cart-item-top">
                        <div>
                          <h3 className="cart-item-title">{item.name}</h3>
                          <p className="cart-item-price">₹{Number(item.offer_price || item.regular_price || item.price).toFixed(2)}</p>
                          <div className="cart-item-stock">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            In Stock
                          </div>
                        </div>
                        <button className="cart-item-delete" onClick={() => removeFromCart(item.id)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        </button>
                      </div>

                      <div className="cart-item-bottom">
                        <div className="cart-quantity-controls">
                          <button className="cart-quantity-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                          <span className="cart-quantity-value">{item.quantity}</span>
                          <button className="cart-quantity-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code section (Desktop puts it here, Mobile follows flow) */}
              <div className="cart-coupon-card">
                <div className="cart-coupon-input-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                  <input type="text" className="cart-coupon-input" placeholder="Have a coupon code?" />
                </div>
                <button className="cart-coupon-btn">Apply</button>
              </div>
            </div>

            {/* Right Column (Sidebar Summary) */}
            <div className="cart-sidebar-col">
              {/* Order Summary */}
              <div className="cart-summary-card">
                <div className="cart-summary-details">
                  <div className="cart-summary-header">
                    <div className="cart-summary-header-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    </div>
                    <h3>Order Summary</h3>
                  </div>

                  <div className="cart-summary-row">
                    <span>Subtotal ({cart.length} Items)</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="cart-summary-row discount">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                  )}

                  <hr className="cart-summary-divider" />

                  <div className="cart-summary-total">
                    <span>Total</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="cart-checkout-btn" onClick={handleCheckout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Proceed to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>

              <div className="cart-trust-badges">
                <div className="cart-trust-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  Secure Checkout
                </div>
                <div className="cart-trust-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 4.43-8.13l-4.29 2.56"></path><path d="M2.5 22v-6h6M21.87 8.43a10 10 0 1 0-4.43 8.13l4.29-2.56"></path></svg>
                  Easy Returns
                </div>
                <div className="cart-trust-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1v-4h3v2z"></path><path d="M3 19a2 2 0 0 0 2 2h1v-4H3v2z"></path></svg>
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Wide Banner */}
        {cart.length > 0 && (
          <div className="cart-footer-features">
            <div className="cart-feature-item">
              <div className="cart-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
              <div className="cart-feature-text">
                <span className="cart-feature-title">Secure Checkout</span>
                <span className="cart-feature-sub">100% secure payments</span>
              </div>
            </div>

            <div className="cart-feature-item">
              <div className="cart-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              </div>
              <div className="cart-feature-text">
                <span className="cart-feature-title">Easy Returns</span>
                <span className="cart-feature-sub">Hassle-free returns</span>
              </div>
            </div>

            <div className="cart-feature-item">
              <div className="cart-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <div className="cart-feature-text">
                <span className="cart-feature-title">Fast Delivery</span>
                <span className="cart-feature-sub">Pan India Delivery</span>
              </div>
            </div>

            <div className="cart-feature-item">
              <div className="cart-feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <div className="cart-feature-text">
                <span className="cart-feature-title">Quality Products</span>
                <span className="cart-feature-sub">Handpicked with care</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
