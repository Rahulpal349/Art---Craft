import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('process');

  return (
    <div className="product-detail-page">
      <div className="breadcrumb" style={{ fontSize: '0.8rem', color: '#64748b', padding: '2rem 5%', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <Link to="/collections" style={{ color: '#64748b', textDecoration: 'none' }}>Collections</Link>
        <span>/</span>
        <Link to="/collections" style={{ color: '#64748b', textDecoration: 'none' }}>Ceramics</Link>
        <span>/</span>
        <span style={{ color: '#0f172a' }}>Indigo Glazed Ceramic Vase</span>
      </div>

      <div className="pdp-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '0 5% 4rem' }}>
        
        <div className="pdp-images">
          <div className="main-image" style={{ position: 'relative', marginBottom: '1rem' }}>
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.9)', padding: '0.25rem 0.75rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, color: '#1e3a8a' }}>Limited Edition</div>
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800" alt="Indigo Glazed Ceramic Vase" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="thumbnail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <img src="https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=400" alt="Detail 1" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Detail 2" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
          </div>
        </div>

        <div className="pdp-info">
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#1e3a8a', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
            HAND-THROWN COLLECTION
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.2 }}>
            Indigo Glazed<br/>Ceramic Vase
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem', color: '#1e3a8a', fontWeight: 500 }}>$340.00</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: '#64748b' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#1e3a8a" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              5.0 (28 Reviews)
            </div>
          </div>

          <div style={{ color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>Sculpted by hand in our seaside studio, each vase is a unique vessel of tranquil beauty. The deep indigo glaze is applied using a traditional dipping technique, ensuring that no two pieces are ever identical.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', color: '#64748b' }}>-</button>
              <span style={{ fontWeight: 500 }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', color: '#64748b' }}>+</button>
            </div>
            <button className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              Add to Cart
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </button>
          </div>
          
          <button style={{ width: '100%', background: 'none', border: '1px solid #e2e8f0', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontWeight: 500, color: '#0f172a', cursor: 'pointer', marginBottom: '3rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Add to Wishlist
          </button>

          <div className="accordions" style={{ borderTop: '1px solid #e2e8f0' }}>
            <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <button onClick={() => setActiveAccordion(activeAccordion === 'process' ? '' : 'process')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
                The Process
                <span>{activeAccordion === 'process' ? '−' : '+'}</span>
              </button>
              {activeAccordion === 'process' && (
                <div style={{ paddingBottom: '1.5rem', color: '#475569', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  <p style={{ marginBottom: '1rem' }}>Hand-thrown on a traditional kick-wheel over four hours. Our signature indigo glaze uses natural mineral oxides sourced from the coastal ridges.</p>
                  <p>Fired twice at 1200°C to achieve a durable, water-tight finish with a rich depth of color.</p>
                </div>
              )}
            </div>
            <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <button onClick={() => setActiveAccordion(activeAccordion === 'specs' ? '' : 'specs')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
                Specifications
                <span>{activeAccordion === 'specs' ? '−' : '+'}</span>
              </button>
              {activeAccordion === 'specs' && (
                <div style={{ paddingBottom: '1.5rem', color: '#475569', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  <p>Dimensions: 12" H x 8" W</p>
                  <p>Weight: 4.5 lbs</p>
                  <p>Material: High-fire stoneware</p>
                </div>
              )}
            </div>
            <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <button onClick={() => setActiveAccordion(activeAccordion === 'care' ? '' : 'care')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
                Care & Shipping
                <span>{activeAccordion === 'care' ? '−' : '+'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#f8fafc', padding: '4rem 2rem', textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', border: '1px dashed #1e3a8a', borderRadius: '4px', color: '#1e3a8a', marginBottom: '1.5rem' }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>Handmade</span>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>The Artisan's Guarantee</h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Every piece in the Artisanat gallery is vetted for sustainable material sourcing and ethical production. When you purchase this vase, you are supporting a multi-generational legacy of British ceramicists.
        </p>
      </div>

      <div style={{ padding: '0 5% 4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#1e3a8a', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Curated Pairings</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#0f172a', margin: 0 }}>Complete the Space</h2>
          </div>
          <Link to="/collections" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e3a8a', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>View All Ceramics &rarr;</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Sea Mist Nesting Bowls" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Sea Mist Nesting Bowls</h3>
            <p style={{ color: '#475569', margin: 0 }}>$125.00</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400" alt="Slate Linen Runner" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Slate Linen Runner</h3>
            <p style={{ color: '#475569', margin: 0 }}>$85.00</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Cobalt Water Pitcher" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Cobalt Water Pitcher</h3>
            <p style={{ color: '#475569', margin: 0 }}>$110.00</p>
          </div>
          <div className="product-card">
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Speckled Clay Holders" style={{ width: '100%', height: 'auto', marginBottom: '1rem' }} />
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.5rem' }}>Speckled Clay Holders</h3>
            <p style={{ color: '#475569', margin: 0 }}>$72.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
