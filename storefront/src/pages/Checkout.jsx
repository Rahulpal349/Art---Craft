import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="checkout-page" style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem 0' }}>
      <div className="checkout-header" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", margin: 0, color: '#0f172a' }}>Artisanat</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', fontWeight: 600, color: '#475569', letterSpacing: '0.05em' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          SECURE CHECKOUT
        </div>
      </div>

      <div className="checkout-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem' }}>
        <div className="checkout-main">
          
          <div className="checkout-steps" style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0' }}>
            <div className="step active" style={{ paddingBottom: '1rem', borderBottom: '2px solid #1e3a8a', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1e3a8a', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
              SHIPPING
            </div>
            <div className="step" style={{ paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</span>
              PAYMENT
            </div>
            <div className="step" style={{ paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>3</span>
              CONFIRMATION
            </div>
          </div>

          <div className="checkout-card" style={{ background: 'white', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a8a', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>Shipping Address</h3>
            <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="auth-form-group">
                <label>First Name</label>
                <input type="text" className="auth-input" placeholder="Julianne" />
              </div>
              <div className="auth-form-group">
                <label>Last Name</label>
                <input type="text" className="auth-input" placeholder="Moore" />
              </div>
              <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
                <label>Address</label>
                <input type="text" className="auth-input" placeholder="123 Artisanal Way, Studio B" />
              </div>
              <div className="auth-form-group">
                <label>City</label>
                <input type="text" className="auth-input" placeholder="Florence" />
              </div>
              <div className="auth-form-group">
                <label>Postal Code</label>
                <input type="text" className="auth-input" placeholder="50121" />
              </div>
              <div className="auth-checkbox-group" style={{ gridColumn: '1 / -1', marginTop: '0.5rem' }}>
                <input type="checkbox" id="save-address" />
                <label htmlFor="save-address">Save this address for future purchases</label>
              </div>
            </div>
          </div>

          <div className="checkout-card" style={{ background: 'white', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', marginBottom: '2rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a8a', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>Payment Method</h3>
            
            <div className="payment-method-box active" style={{ border: '1px solid #1e3a8a', borderRadius: '4px', padding: '1.5rem', marginBottom: '1rem', background: '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontWeight: 500, color: '#1e3a8a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#1e3a8a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }}></div>
                  </div>
                  Credit or Debit Card
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
              </div>
              <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Card Number</label>
                  <div style={{ position: 'relative' }}>
                    <input type="text" className="auth-input" placeholder="0000 0000 0000 0000" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                </div>
                <div className="auth-form-group">
                  <label>Expiry Date</label>
                  <input type="text" className="auth-input" placeholder="MM/YY" />
                </div>
                <div className="auth-form-group">
                  <label>CVV</label>
                  <input type="text" className="auth-input" placeholder="***" />
                </div>
              </div>
            </div>

            <div className="payment-method-box" style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#475569' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '1px solid #cbd5e1' }}></div>
                PayPal
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 14v1"/><path d="M8 14v1"/><path d="M2 10h20"/></svg>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/cart" style={{ color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Cart
            </Link>
            <button className="auth-btn" style={{ width: 'auto', padding: '1rem 2rem', margin: 0 }}>Complete Purchase</button>
          </div>

        </div>

        <div className="checkout-sidebar">
          <div className="order-summary-card" style={{ background: '#f0f4f8', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: '#1e3a8a', fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 500 }}>Order Summary</h3>
            
            <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '1rem' }}>
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=150" alt="Vase" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div style={{ flex: 1, fontSize: '0.85rem' }}>
                <h4 style={{ margin: '0 0 0.25rem', color: '#1e3a8a' }}>Indigo Glaze Vessel</h4>
                <div style={{ color: '#64748b', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>HANDMADE • LIMITED</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Qty: 1</span>
                  <strong style={{ color: '#0f172a' }}>$240.00</strong>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=150" alt="Throw" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div style={{ flex: 1, fontSize: '0.85rem' }}>
                <h4 style={{ margin: '0 0 0.25rem', color: '#1e3a8a' }}>Hand-woven Linen Throw</h4>
                <div style={{ color: '#64748b', fontSize: '0.75rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TEXTILES</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569' }}>
                  <span>Qty: 1</span>
                  <strong style={{ color: '#0f172a' }}>$185.00</strong>
                </div>
              </div>
            </div>
            
            <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', color: '#475569', fontSize: '0.9rem' }}>
              <span>Subtotal</span>
              <span>$425.00</span>
            </div>
            <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', color: '#475569', fontSize: '0.9rem' }}>
              <span>Shipping</span>
              <span>$15.00</span>
            </div>
            <div className="summary-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#475569', fontSize: '0.9rem' }}>
              <span>Taxes</span>
              <span>$34.00</span>
            </div>
            
            <div className="summary-total" style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #cbd5e1', paddingTop: '1.5rem', marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 600, color: '#1e3a8a' }}>
              <span>Total</span>
              <span>$474.00</span>
            </div>

            <div className="summary-badges" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.8rem', color: '#475569' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>
                Authenticity Guaranteed
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/><path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>
                Eco-friendly Carbon Neutral Shipping
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                30-Day Curated Returns
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
