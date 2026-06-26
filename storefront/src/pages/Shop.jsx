import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';

export default function Shop() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddingId(product.id);
    setTimeout(() => setAddingId(null), 800);
  };

  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) return product.images[0];
    if (product.image) return product.image;
    return 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop';
  };

  const getProductPrice = (product) => {
    return product.offer_price || product.regular_price || product.price || 0;
  };

  return (
    <section className="section">
        <div className="section-header">
            <h2>All Collections</h2>
            <p>Explore our full range of handcrafted artifacts</p>
        </div>
        
        {loading ? (
          <p style={{textAlign:'center'}}>Loading products...</p>
        ) : products.length === 0 ? (
          <p style={{textAlign:'center', color: '#888'}}>No products available yet. Check back soon!</p>
        ) : (
          <div className="product-grid">
              {products.map(product => {
                const img = getProductImage(product);
                const price = getProductPrice(product);
                
                return (
                  <div key={product.id} className="product-card">
                      <div className="product-img">
                          <Link to={`/product/${product.id}`}>
                              <img src={img} alt={product.name} />
                          </Link>
                      </div>
                      <div className="product-info">
                          <h3><Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>{product.name}</Link></h3>
                          {product.category && <p style={{fontSize: '0.8rem', color: '#888', margin: '0 0 0.25rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>{product.category}</p>}
                          <p className="product-price">
                            ₹{price.toFixed ? price.toFixed(2) : price}
                            {product.regular_price && product.offer_price && product.offer_price < product.regular_price && (
                              <span style={{fontSize: '0.85rem', color: '#999', textDecoration: 'line-through', marginLeft: '0.5rem'}}>₹{product.regular_price}</span>
                            )}
                          </p>
                          <button 
                              className={`btn btn-primary ${addingId === product.id ? 'btn-added' : ''}`} 
                              style={{ width: "100%" }}
                              onClick={() => handleAddToCart(product)}
                              disabled={addingId === product.id}
                          >
                              {addingId === product.id ? 'Added!' : 'Add to Cart'}
                          </button>
                      </div>
                  </div>
                );
              })}
          </div>
        )}
    </section>
  );
}
