import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([
    { id: 1, name: "Indigo Glaze Vase", price: 1240, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Linen Throw Blanket", price: 2185, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Walnut Wood Platter", price: 850, image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Hand-poured Soy Candle", price: 450, image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Terracotta Planter", price: 680, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Woven Rattan Basket", price: 1550, image: "https://images.unsplash.com/photo-1595514686762-11c50117a1a4?q=80&w=600&auto=format&fit=crop" }
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <section className="section">
        <div className="section-header">
            <h2>All Collections</h2>
            <p>Explore our full range of handcrafted artifacts</p>
        </div>
        
        {loading ? (
          <p style={{textAlign:'center'}}>Loading products...</p>
        ) : (
          <div className="product-grid">
              {products.map(product => (
                <div key={product.id} className="product-card">
                    <div className="product-img">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="product-price">₹{product.price}</p>
                        <button className="btn btn-primary" style={{ width: "100%" }}>Add to Cart</button>
                    </div>
                </div>
              ))}
          </div>
        )}
    </section>
  );
}
