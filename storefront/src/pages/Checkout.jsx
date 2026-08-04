import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../assets/styles/checkout.css';

export default function Checkout() {
  const { cart, cartTotal } = useCart();
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('cards');
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    phone: '',
    pincode: '',
    address1: '',
    address2: '',
    city: '',
    state: ''
  });
  const [isFetchingPincode, setIsFetchingPincode] = useState(false);

  const handlePincodeChange = async (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setShippingDetails(prev => ({ ...prev, pincode: value }));
      
      if (value.length === 6) {
        setIsFetchingPincode(true);
        try {
          const res = await fetch(`https://api.postalpincode.in/pincode/${value}`);
          const data = await res.json();
          if (data && data[0] && data[0].Status === 'Success') {
            const postOffice = data[0].PostOffice[0];
            setShippingDetails(prev => ({
              ...prev,
              city: postOffice.District,
              state: postOffice.State
            }));
          } else {
            setShippingDetails(prev => ({ ...prev, city: '', state: '' }));
          }
        } catch (error) {
          console.error("Error fetching pincode:", error);
        } finally {
          setIsFetchingPincode(false);
        }
      } else {
        setShippingDetails(prev => ({ ...prev, city: '', state: '' }));
      }
    }
  };

  if (cart.length === 0) {
    return <Navigate to="/cart" />;
  }
  
  const shippingCost = shippingMethod === 'express' ? 199.00 : 99.00;
  const discount = 100.00;
  
  const finalTotal = cartTotal + shippingCost - discount;

  return (
    <div className="checkout-page-container">
      {/* Decor */}
      <div className="checkout-decor checkout-decor-left"></div>
      <div className="checkout-decor checkout-decor-right"></div>

      <div className="checkout-content">
        {/* Topbar */}
        <div className="checkout-topbar">
          <Link to="/cart" className="checkout-back-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </Link>
          <div className="checkout-brand-container">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", margin: 0, fontSize: '2rem', fontStyle: 'italic', color: '#1e3a8a' }}>Art & Craft</h2>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '2px', fontWeight: 500 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              ART IN YOUR HOME
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
          </div>
          <div className="checkout-secure-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Secure Checkout
          </div>
        </div>

        {/* Stepper */}
        <div className="checkout-stepper">
          <div className="step-item active">
            <div className="step-circle">1</div>
            <div className="step-label">Checkout</div>
          </div>
          <div className="step-connector"></div>
          <div className="step-item">
            <div className="step-circle">2</div>
            <div className="step-label">Shipping</div>
          </div>
          <div className="step-connector"></div>
          <div className="step-item">
            <div className="step-circle">3</div>
            <div className="step-label">Payment</div>
          </div>
          <div className="step-connector"></div>
          <div className="step-item">
            <div className="step-circle">4</div>
            <div className="step-label">Review</div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="checkout-grid">
          
          {/* Left Column */}
          <div className="checkout-main-col">
            
            {/* 1. Delivery Information */}
            <div className="checkout-section">
              <div className="checkout-section-header">
                <h3 className="checkout-section-title">
                  <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  1. Delivery Information
                </h3>
                </div>
              <div className="address-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-input" placeholder="e.g. Rahul Pal" value={shippingDetails.fullName} onChange={e => setShippingDetails({...shippingDetails, fullName: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="+91 xxxxx xxxxx" value={shippingDetails.phone} onChange={e => setShippingDetails({...shippingDetails, phone: e.target.value})} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      Pincode
                      {isFetchingPincode && <span className="pincode-loading"> (Fetching...)</span>}
                    </label>
                    <input type="text" className="form-input" placeholder="e.g. 722203" maxLength="6" value={shippingDetails.pincode} onChange={handlePincodeChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City / District</label>
                    <input type="text" className="form-input bg-gray" placeholder="Auto-filled" value={shippingDetails.city} readOnly />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Address Line 1</label>
                  <input type="text" className="form-input" placeholder="House No, Building, Street" value={shippingDetails.address1} onChange={e => setShippingDetails({...shippingDetails, address1: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Address Line 2 (Optional)</label>
                  <input type="text" className="form-input" placeholder="Landmark, Area" value={shippingDetails.address2} onChange={e => setShippingDetails({...shippingDetails, address2: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">State</label>
                  <input type="text" className="form-input bg-gray" placeholder="Auto-filled" value={shippingDetails.state} readOnly />
                </div>
              </div>
            </div>

            {/* 2. Payment Method */}
            <div className="checkout-section">
              <div className="checkout-section-header">
                <h3 className="checkout-section-title">
                  <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  </div>
                  2. Payment Method
                </h3>
              </div>
              <div className="options-list">
                
                <div className={`option-row ${paymentMethod === 'cards' ? 'selected' : ''}`} onClick={() => setPaymentMethod('cards')}>
                  <div className="option-left">
                    <div className="custom-radio"><div className="custom-radio-inner"></div></div>
                    <div className="option-icon" style={{color: '#1e3a8a'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                    </div>
                    <div className="option-details">
                      <span className="option-name">UPI / Cards / Net Banking</span>
                      <span className="option-subtext">Visa, MasterCard, RuPay, UPI etc.</span>
                    </div>
                  </div>
                </div>


                <div className={`option-row ${paymentMethod === 'cod' ? 'selected' : ''}`} onClick={() => setPaymentMethod('cod')}>
                  <div className="option-left">
                    <div className="custom-radio"><div className="custom-radio-inner"></div></div>
                    <div className="option-icon" style={{color: '#475569'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
                    </div>
                    <div className="option-details">
                      <span className="option-name">Cash on Delivery</span>
                      <span className="option-subtext">Pay when you receive your order</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. Shipping Method */}
            <div className="checkout-section">
              <div className="checkout-section-header">
                <h3 className="checkout-section-title">
                  <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                  </div>
                  3. Shipping Method
                </h3>
              </div>
              <div className="options-list">
                
                <div className={`option-row ${shippingMethod === 'standard' ? 'selected' : ''}`} onClick={() => setShippingMethod('standard')}>
                  <div className="option-left">
                    <div className="custom-radio"><div className="custom-radio-inner"></div></div>
                    <div className="option-details">
                      <span className="option-name">Standard Shipping (3-5 Days)</span>
                    </div>
                  </div>
                  <span className="option-price">₹99.00</span>
                </div>

                <div className={`option-row ${shippingMethod === 'express' ? 'selected' : ''}`} onClick={() => setShippingMethod('express')}>
                  <div className="option-left">
                    <div className="custom-radio"><div className="custom-radio-inner"></div></div>
                    <div className="option-details">
                      <span className="option-name">Express Shipping (1-2 Days)</span>
                    </div>
                  </div>
                  <span className="option-price">₹199.00</span>
                </div>

              </div>
            </div>

            {/* Trust Badges */}
            <div className="checkout-trust-row desktop-only">
              <div className="trust-item">
                <div className="trust-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                </div>
                <div className="trust-item-text">
                  <span className="trust-item-title">Secure Payment</span>
                  <span className="trust-item-sub">100% Secure</span>
                </div>
              </div>
              
              <div className="trust-item" style={{justifyContent: 'center', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', padding: '0 1rem'}}>
                <div className="trust-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                </div>
                <div className="trust-item-text">
                  <span className="trust-item-title">Easy Returns</span>
                  <span className="trust-item-sub">7 Days Return</span>
                </div>
              </div>

              <div className="trust-item" style={{justifyContent: 'flex-end'}}>
                <div className="trust-item-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
                </div>
                <div className="trust-item-text">
                  <span className="trust-item-title">Fast Delivery</span>
                  <span className="trust-item-sub">Pan India Delivery</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="checkout-summary-col">
            <div className="checkout-section" style={{marginBottom: '0'}}>
              <div className="checkout-section-header" style={{marginBottom: '1rem'}}>
                <h3 className="checkout-section-title">
                  <div className="section-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  </div>
                  4. Order Summary
                </h3>
              </div>
              
              <div className="order-summary-list">
                {cart.map(item => (
                  <div key={item.id} className="summary-item">
                    <img src={item.images?.[0] || item.image || item.img || 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop'} alt={item.name} className="summary-item-img" />
                    <div className="summary-item-details">
                      <h4 className="summary-item-name">{item.name}</h4>
                      <p className="summary-item-qty">Qty: {item.quantity}</p>
                    </div>
                    <div className="summary-item-price">
                      ₹{(Number(item.offer_price || item.regular_price || item.price) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="summary-totals">
                <div className="summary-totals-row">
                  <span>Subtotal ({cart.length} Items)</span>
                  <span>₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-totals-row">
                  <span>Shipping</span>
                  <span>₹{shippingCost.toFixed(2)}</span>
                </div>
                <div className="summary-totals-row discount">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
                
                <div className="summary-final-total">
                  <span>Total</span>
                  <span>₹{finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Coupon Code section */}
            <div className="checkout-coupon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{margin: '0 0.5rem'}}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              <input type="text" className="checkout-coupon-input" placeholder="Have a coupon code?" />
              <button className="checkout-coupon-btn">Apply</button>
            </div>

            <button className="place-order-btn">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Place Order
              </span>
              <span style={{gap: '1rem'}}>
                ₹{finalTotal.toFixed(2)}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </button>
            
            <div className="secure-note">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              Your payment information is secure and encrypted
            </div>

          </div>
          
          {/* Trust Badges for Mobile */}
          <div className="checkout-trust-row mobile-only" style={{marginTop: '0.5rem'}}>
            <div className="trust-item">
              <div className="trust-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">Secure Payment</span>
                <span className="trust-item-sub">100% Secure</span>
              </div>
            </div>
            
            <div className="trust-item" style={{justifyContent: 'center', borderLeft: '1px solid #e2e8f0', borderRight: '1px solid #e2e8f0', padding: '0 1rem'}}>
              <div className="trust-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">Easy Returns</span>
                <span className="trust-item-sub">7 Days Return</span>
              </div>
            </div>

            <div className="trust-item" style={{justifyContent: 'flex-end'}}>
              <div className="trust-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <div className="trust-item-text">
                <span className="trust-item-title">Fast Delivery</span>
                <span className="trust-item-sub">Pan India Delivery</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
