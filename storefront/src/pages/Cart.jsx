import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items-section">
          <div className="cart-header">
            <h2>Your Selection</h2>
            <p>Items carefully chosen for your collection.</p>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Indigo Tide Vessel" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-top">
                <div>
                  <h3>Indigo Tide Vessel</h3>
                  <span className="cart-item-category">CERAMICS • HAND-THROWN</span>
                </div>
                <button className="cart-item-remove">&times;</button>
              </div>
              <div className="cart-item-bottom">
                <div className="cart-item-quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div className="cart-item-price">$320.00</div>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400" alt="Midnight Weave Throw" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-top">
                <div>
                  <h3>Midnight Weave Throw</h3>
                  <span className="cart-item-category">TEXTILES • ORGANIC WOOL</span>
                </div>
                <button className="cart-item-remove">&times;</button>
              </div>
              <div className="cart-item-bottom">
                <div className="cart-item-quantity">
                  <button>-</button>
                  <span>2</span>
                  <button>+</button>
                </div>
                <div className="cart-item-price">$450.00</div>
              </div>
            </div>
          </div>

          <div className="cart-item">
            <div className="cart-item-image">
              <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400" alt="Walnut Horizon Platter" />
            </div>
            <div className="cart-item-details">
              <div className="cart-item-top">
                <div>
                  <h3>Walnut Horizon Platter</h3>
                  <span className="cart-item-category">WOODWORK • SUSTAINABLE WALNUT</span>
                </div>
                <button className="cart-item-remove">&times;</button>
              </div>
              <div className="cart-item-bottom">
                <div className="cart-item-quantity">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div className="cart-item-price">$185.00</div>
              </div>
            </div>
          </div>

          <div className="cart-footer-note">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <em>Each item is individually wrapped in artisanal eco-friendly packaging.</em>
          </div>
        </div>

        <div className="cart-summary-section">
          <div className="order-summary-card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>$1,405.00</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>$1,405.00</span>
            </div>

            <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: '1rem', boxSizing: 'border-box' }}>
              Proceed to Checkout
            </Link>
            <Link to="/collections" className="btn btn-outline" style={{ width: '100%', display: 'block', textAlign: 'center', boxSizing: 'border-box' }}>
              Continue Shopping
            </Link>

            <div className="summary-badges">
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                <div>
                  <strong>COMPLIMENTARY SHIPPING</strong>
                  <p>On all orders over $1,000. Delivered with white-glove care.</p>
                </div>
              </div>
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
                <div>
                  <strong>AUTHENTICITY GUARANTEED</strong>
                  <p>Every piece is verified and signed by the artisan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
