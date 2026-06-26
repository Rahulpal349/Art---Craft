import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('process');
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();
        
      if (!error && data) {
        setProduct(data);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 800);
  };

  if (loading) {
    return (
      <div className="product-detail-page" style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-page" style={{ padding: '4rem 5%', textAlign: 'center' }}>
        <h2>Product not found.</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back to Shop</Link>
      </div>
    );
  }

  const getProductImage = () => {
    if (product.images && product.images.length > 0) return product.images[0];
    if (product.image) return product.image;
    return 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800'; // fallback
  };

  const getProductPrice = () => {
    return product.offer_price || product.regular_price || product.price || 0;
  };

  const mainImage = getProductImage();
  const currentPrice = getProductPrice();

  return (
    <div className="product-detail-page">
      <div className="breadcrumb" style={{ fontSize: '0.8rem', color: '#64748b', padding: '2rem 5%', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <Link to="/shop" style={{ color: '#64748b', textDecoration: 'none' }}>Shop</Link>
        <span>/</span>
        {product.category && (
          <>
            <span style={{ color: '#64748b' }}>{product.category}</span>
            <span>/</span>
          </>
        )}
        <span style={{ color: '#0f172a' }}>{product.name}</span>
      </div>

      <div className="pdp-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', padding: '0 5% 4rem' }}>
        
        <div className="pdp-images">
          <div className="main-image" style={{ position: 'relative', marginBottom: '1rem' }}>
            <img src={mainImage} alt={product.name} style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="thumbnail-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
              {product.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${product.name} detail ${idx + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              ))}
            </div>
          )}
        </div>

        <div className="pdp-info">
          {product.category && (
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#1e3a8a', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              {product.category}
            </div>
          )}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1rem', lineHeight: 1.2 }}>
            {product.name}
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.25rem', color: '#1e3a8a', fontWeight: 500 }}>
              ₹{currentPrice.toFixed ? currentPrice.toFixed(2) : currentPrice}
            </span>
            {product.regular_price && product.offer_price && product.offer_price < product.regular_price && (
              <span style={{ fontSize: '1rem', color: '#94a3b8', textDecoration: 'line-through' }}>
                ₹{product.regular_price}
              </span>
            )}
          </div>

          <div style={{ color: '#475569', lineHeight: 1.6, marginBottom: '2rem', whiteSpace: 'pre-wrap' }}>
            {product.description ? (
              <p>{product.description}</p>
            ) : (
              <p>An exquisite handcrafted piece, perfect for your collection.</p>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem', borderRadius: '4px' }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', color: '#64748b' }}>-</button>
              <span style={{ fontWeight: 500 }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ background: 'none', border: 'none', padding: '1rem', cursor: 'pointer', color: '#64748b' }}>+</button>
            </div>
            <button 
              className={`btn btn-primary ${isAdding ? 'btn-added' : ''}`} 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s ease' }}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'Added!' : 'Add to Cart'}
              {!isAdding && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>}
            </button>
          </div>
          
          <div className="accordions" style={{ borderTop: '1px solid #e2e8f0', marginTop: '3rem' }}>
            <div className="accordion-item" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <button onClick={() => setActiveAccordion(activeAccordion === 'details' ? '' : 'details')} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '1.5rem 0', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
                Product Details
                <span>{activeAccordion === 'details' ? '−' : '+'}</span>
              </button>
              {activeAccordion === 'details' && (
                <div style={{ paddingBottom: '1.5rem', color: '#475569', lineHeight: 1.6, fontSize: '0.9rem' }}>
                  <p><strong>Stock Available:</strong> {product.stock || 0} units</p>
                  <p><strong>Category:</strong> {product.category || 'Uncategorized'}</p>
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
    </div>
  );
}
