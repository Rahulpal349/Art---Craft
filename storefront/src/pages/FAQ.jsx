import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState('');

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? '' : id);
  };

  return (
    <div className="faq-page" style={{ padding: '4rem 5%', background: '#fff' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>SUPPORT CENTER</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#0f172a', margin: '0 0 1.5rem' }}>Frequently Asked Questions</h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Discover the details of our artisanal process, shipping commitments, and our transparent care for every piece we curate.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto', marginBottom: '6rem' }}>
        
        <aside>
          <div style={{ background: '#f0f4f8', padding: '2rem', borderRadius: '4px', position: 'sticky', top: '2rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#1e3a8a', margin: '0 0 0.25rem' }}>Categories</h3>
            <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>REFINE YOUR SEARCH</div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#1e3a8a', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                Craftsmanship
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Shipping
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                Returns
              </label>
            </div>
            
            <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem' }}>APPLY FILTERS</button>
          </div>
        </aside>

        <div className="faq-content">
          
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#1e3a8a', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
              Materials & Craftsmanship
            </h2>
            
            <div className="accordions">
              <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button onClick={() => toggleAccordion('faq1')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 500, color: '#0f172a', fontSize: '1.1rem', cursor: 'pointer' }}>
                  Are your pieces truly handmade?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === 'faq1' ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6"/></svg>
                </button>
                {activeAccordion === 'faq1' && (
                  <div style={{ paddingBottom: '1.5rem', color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    Yes. Every item in our gallery is created by hand in small batches by our partner artisans.
                  </div>
                )}
              </div>
              <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button onClick={() => toggleAccordion('faq2')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 500, color: '#0f172a', fontSize: '1.1rem', cursor: 'pointer' }}>
                  How should I care for my ceramic items?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === 'faq2' ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6"/></svg>
                </button>
              </div>
              <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button onClick={() => toggleAccordion('faq3')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 500, color: '#0f172a', fontSize: '1.1rem', cursor: 'pointer' }}>
                  Can I request a custom commission?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === 'faq3' ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6"/></svg>
                </button>
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#1e3a8a', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Shipping & Delivery
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '4px' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Domestic Shipping</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>We ship across the continental US via white-glove couriers for fragile items. Standard pieces arrive within 5-7 business days.</p>
              </div>
              <div style={{ border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '4px' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#0f172a', margin: '0 0 0.5rem' }}>International Gallery</h4>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>Global shipping is available for most collections. Please note that customs duties are the responsibility of the recipient.</p>
              </div>
            </div>

            <div className="accordions">
              <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <button onClick={() => toggleAccordion('faq4')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 500, color: '#0f172a', fontSize: '1.1rem', cursor: 'pointer' }}>
                  How is my art packaged?
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: activeAccordion === 'faq4' ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6"/></svg>
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#1e3a8a', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              Returns & Refunds
            </h2>

            <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '4px' }}>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Our Gallery Guarantee</h4>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                If a piece does not resonate in your space as expected, we offer a 14-day return window for most collections. The item must be in its original, pristine condition.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Refunds processed within 5 days of receipt.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569', fontSize: '0.9rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  Insured return shipping is required.
                </li>
              </ul>
            </div>
          </section>

        </div>
      </div>

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop" alt="Background" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) opacity(0.3)' }} />
        <div style={{ position: 'relative', zIndex: 1, background: 'rgba(255,255,255,0.95)', padding: '3rem', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#1e3a8a', margin: '0 0 0.5rem' }}>Beyond the FAQs</h2>
          <p style={{ color: '#475569', marginBottom: '2rem' }}>Our gallery consultants are available for private viewings and detailed inquiries.</p>
          <Link to="/contact" className="btn btn-primary">CONTACT OUR CONCIERGE</Link>
        </div>
      </div>

    </div>
  );
}
