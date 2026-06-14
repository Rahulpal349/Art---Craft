import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items-section">
          <div className="cart-header">
            <h2>Your Selection</h2>
            <p>Items carefully chosen for your collection.</p>
          </div>

          {cart.length === 0 ? (
            <div style={{ padding: '4rem 0', textAlign: 'center' }}>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>Your cart is currently empty.</p>
              <Link to="/collections" className="btn btn-primary">Browse Collections</Link>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-top">
                      <div>
                        <h3>{item.name}</h3>
                        <span className="cart-item-category">ART & CRAFT</span>
                      </div>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>&times;</button>
                    </div>
                    <div className="cart-item-bottom">
                      <div className="cart-item-quantity">
                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                      <div className="cart-item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

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
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>₹0.00</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className={`btn btn-primary ${cart.length === 0 ? 'disabled' : ''}`} style={{ width: '100%', display: 'block', textAlign: 'center', marginBottom: '1rem', boxSizing: 'border-box', pointerEvents: cart.length === 0 ? 'none' : 'auto', opacity: cart.length === 0 ? 0.5 : 1 }}>
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
                  <p>On all orders over ₹1,000. Delivered with white-glove care.</p>
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
