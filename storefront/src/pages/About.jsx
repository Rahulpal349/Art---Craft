import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '80vh', minHeight: '600px', display: 'flex', alignItems: 'center', background: 'url(https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1600&auto=format&fit=crop) center/cover no-repeat' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)' }}></div>
        <div style={{ position: 'relative', zIndex: 1, padding: '0 10%', maxWidth: '800px' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>ESTABLISHED 2024</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', color: '#0f172a', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
            The Quiet Luxury of Hand-Made
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '500px' }}>
            Art & Craft is a curated sanctuary for master craftsmanship, where every object tells a story of patience, material, and the human hand.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section style={{ padding: '6rem 10%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 2rem' }}>Our Mission</h2>
          <div style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1.5rem' }}>
              In an era of mass production, Art & Craft serves as a bridge between traditional heritage and contemporary living. We believe that the objects we surround ourselves with should possess a soul.
            </p>
            <p>
              Our gallery exclusively partners with independent artisans who honor ancestral techniques while pushing the boundaries of modern design. We curate pieces that are intended to be lived with, touched, and passed down through generations.
            </p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=800&auto=format&fit=crop" alt="Crafting glass" style={{ width: '100%', height: 'auto', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', background: '#f0f4f8', padding: '2rem', border: '1px solid #e2e8f0', maxWidth: '250px' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontStyle: 'italic', color: '#1e3a8a', margin: 0, lineHeight: 1.4 }}>
              "Every piece is unique."
            </p>
          </div>
        </div>
      </section>

      {/* The Handmade Process Section */}
      <section style={{ padding: '6rem 10%', background: '#f8fafc', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1rem' }}>The Handmade Process</h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          From raw material to finished masterpiece, witness the journey of creation that happens within our partner studios.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ gridRow: 'span 2' }}>
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop" alt="Pottery wheel top down" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop" alt="Textile weaving" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <img src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop" alt="Woodworking" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=400&auto=format&fit=crop" alt="Glass blowing" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Meet the Artisans Section */}
      <section style={{ padding: '6rem 10%' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 4rem', textAlign: 'center' }}>Meet the Artisans</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          
          <div>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Elena Rossi" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ceramics</div>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 0.5rem', color: '#0f172a' }}>Elena Rossi</h3>
            <p style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.5 }}>"My work is a dialogue between the clay and the coastal tides of my home."</p>
          </div>

          <div>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" alt="Julian Thorne" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Woodwork</div>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 0.5rem', color: '#0f172a' }}>Julian Thorne</h3>
            <p style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.5 }}>"I listen to the grain. The wood tells me what it wants to become."</p>
          </div>

          <div>
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" alt="Sanae Tanaka" style={{ width: '100%', height: '400px', objectFit: 'cover', filter: 'grayscale(100%)' }} />
              <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#3b82f6', color: 'white', padding: '0.25rem 0.75rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Textiles</div>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 0.5rem', color: '#0f172a' }}>Sanae Tanaka</h3>
            <p style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.5 }}>"Capturing light in a wool thread is the ultimate pursuit of clarity."</p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 10%', background: '#0f172a', color: 'white', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', margin: '0 0 1rem' }}>Bring the Artisan Home</h2>
        <p style={{ color: '#cbd5e1', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Discover our seasonal collections and find a piece that resonates with your space.
        </p>
        <Link to="/collections" className="btn btn-outline" style={{ background: 'white', color: '#0f172a', borderColor: 'white' }}>
          EXPLORE COLLECTIONS
        </Link>
      </section>
    </div>
  );
}
