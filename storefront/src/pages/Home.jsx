import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=2070&auto=format&fit=crop",
    title: "The Quiet Luxury of Hand-Made",
    description: "Crafted with Soul, Shipped with Love. Discover our curated sanctuary for master craftsmanship.",
    buttons: [
      { text: "Shop Now", link: "/collections", primary: true },
      { text: "Our Story", link: "/about", primary: false }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=2070&auto=format&fit=crop",
    title: "Timeless Ceramic Art",
    description: "Elevate your space with our unique, wheel-thrown ceramic collections.",
    buttons: [
      { text: "Explore Ceramics", link: "/collections", primary: true }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
    title: "Sustainable Living",
    description: "Ethically sourced materials designed for the modern eco-conscious home.",
    buttons: [
      { text: "Shop Eco", link: "/collections", primary: true }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2070&auto=format&fit=crop",
    title: "Bespoke Furniture",
    description: "Custom-crafted pieces that tell a story in every grain of wood.",
    buttons: [
      { text: "View Collection", link: "/collections", primary: true },
      { text: "Custom Order", link: "/contact", primary: false }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();
  const [addingId, setAddingId] = useState(null);

  const FEATURED_PRODUCTS = [
    { id: 1, name: "Indigo Glaze Vase", price: 1240, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Linen Throw Blanket", price: 2185, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Walnut Wood Platter", price: 850, image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=600&auto=format&fit=crop" }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddingId(product.id);
    setTimeout(() => setAddingId(null), 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Slider Section */}
      <div className="hero-slider-container">
          <div className="hero-slider">
              {SLIDES.map((slide, index) => (
                <header 
                  key={index}
                  className={`hero slide ${index === currentSlide ? 'active' : ''}`} 
                  style={{
                    backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.7), rgba(30, 58, 95, 0.5)), url('${slide.image}')`
                  }}
                >
                    <h1>{slide.title}</h1>
                    <p>{slide.description}</p>
                    <div className="hero-btns">
                        {slide.buttons.map((btn, i) => (
                          <Link 
                            key={i} 
                            to={btn.link} 
                            className={`btn ${btn.primary ? 'btn-primary' : 'btn-outline'}`}
                            style={!btn.primary ? { background: '#fff' } : {}}
                          >
                            {btn.text}
                          </Link>
                        ))}
                    </div>
                </header>
              ))}
          </div>
          
          {/* Slider Controls */}
          <button className="slider-btn prev-btn" onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}>&#10094;</button>
          <button className="slider-btn next-btn" onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}>&#10095;</button>
          <div className="slider-dots">
              {SLIDES.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`} 
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
          </div>
      </div>

      {/* USP Badges */}
      <section className="usp-section">
          <div className="usp-item">
              <span>🎨</span>
              <h4>100% Handmade</h4>
          </div>
          <div className="usp-item">
              <span>🌿</span>
              <h4>Eco Packaging</h4>
          </div>
          <div className="usp-item">
              <span>✍️</span>
              <h4>Made to Order</h4>
          </div>
      </section>

      {/* Featured Products */}
      <section className="section">
          <div className="section-header">
              <h2>Featured Collections</h2>
              <p>Our most beloved artisanal artifacts</p>
          </div>
          <div className="product-grid">
              {FEATURED_PRODUCTS.map((product) => (
                <div className="product-card" key={product.id}>
                    <div className="product-img">
                        <Link to={`/product/${product.id}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                          <img src={product.image} alt={product.name} />
                        </Link>
                    </div>
                    <div className="product-info">
                        <h3><Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'inherit'}}>{product.name}</Link></h3>
                        <p className="product-price">₹{product.price.toFixed(2)}</p>
                        <button 
                            className={`btn btn-primary ${addingId === product.id ? 'btn-added' : ''}`} 
                            style={{ width: "100%", transition: "all 0.3s ease" }}
                            onClick={() => handleAddToCart(product)}
                            disabled={addingId === product.id}
                        >
                            {addingId === product.id ? 'Added!' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
              ))}
          </div>
      </section>
    </>
  );
}
