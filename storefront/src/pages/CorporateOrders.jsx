import { Link } from 'react-router-dom';

export default function CorporateOrders() {
  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section style={{ padding: '6rem 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', background: '#f8fafc' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem' }}>BESPOKE SERVICES</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', color: '#0f172a', margin: '0 0 1.5rem', lineHeight: 1.1 }}>
            Artisanal Crafting for Extraordinary Ambitions
          </h1>
          <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Elevate your corporate gifting and event experiences with hand-made masterpieces. From limited edition ceramics to custom woodwork workshops, we scale intimacy for the global stage.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#inquiry" className="btn btn-primary">INQUIRE NOW</a>
            <Link to="/collections" className="btn btn-outline">VIEW COLLECTIONS</Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop" alt="Pottery crafting" style={{ width: '100%', height: '500px', objectFit: 'cover', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          <div style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', background: 'white', padding: '2rem', border: '1px solid #e2e8f0', maxWidth: '300px' }}>
            <div style={{ fontSize: '0.7rem', color: '#1e3a8a', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>OUR VISION</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontStyle: 'italic', color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
              "A new standard for meaningful corporate connection."
            </p>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section style={{ padding: '4rem 5%', borderBottom: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#64748b', textTransform: 'uppercase', marginBottom: '2rem' }}>TRUSTED BY GLOBAL VISIONARIES</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#94a3b8' }}>
          <span>LUMINA</span>
          <span>ORION GROUP</span>
          <span>VANTAGE</span>
          <span>MARITIME</span>
          <span>HEARTH & CO</span>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '6rem 5%', background: '#f8fafc', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1rem' }}>From Concept to Creation</h2>
        <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          We bridge the gap between artisanal singular pieces and large-scale delivery through a meticulous three-phase collaboration.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'left' }}>
          <div className="process-card">
            <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop" alt="Notebook" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', color: '#1e3a8a', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>01 — INQUIRY</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 1rem' }}>The Consultation</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>We begin with a deep dive into your brand values or event themes to identify the perfect medium and artisan.</p>
          </div>
          <div className="process-card">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="Swatches" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', color: '#1e3a8a', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>02 — DESIGN</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 1rem' }}>Prototyping</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Receive material swatches and visual renders. We refine every detail until the vision is tactile and perfect.</p>
          </div>
          <div className="process-card">
            <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=600&auto=format&fit=crop" alt="Workshop" style={{ width: '100%', height: '300px', objectFit: 'cover', marginBottom: '1.5rem' }} />
            <div style={{ fontSize: '0.75rem', color: '#1e3a8a', letterSpacing: '0.05em', fontWeight: 600, marginBottom: '0.5rem' }}>03 — PRODUCTION</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', margin: '0 0 1rem' }}>Masterful Execution</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '0.95rem' }}>Our network of artisans begins the hand-making process, followed by white-glove packaging and global logistics.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{ padding: '6rem 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>PORTFOLIO</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: 0 }}>Past Collaborations & Bespoke Projects</h2>
          </div>
          <Link to="/collections" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1e3a8a', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.05em' }}>EXPLORE ALL PROJECTS &rarr;</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div style={{ position: 'relative', height: '600px' }}>
            <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop" alt="Blue Vases" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem 2rem 2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>CORPORATE GIFTING</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', margin: '0 0 0.5rem' }}>The Blue Horizon Collection for Orion</h3>
              <p style={{ fontSize: '0.9rem', color: '#cbd5e1', margin: 0 }}>500 individual hand-thrown ceramic vessels commissioned for executive partners.</p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '1.5rem', height: '600px' }}>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=600&auto=format&fit=crop" alt="Workshop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: '0 0 0.25rem' }}>Lumina Design Residency</h3>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0 }}>BESPOKE WORKSHOP</p>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=600&auto=format&fit=crop" alt="Textiles" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem 1.5rem 1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: '0 0 0.25rem' }}>Vestige Indigo Series</h3>
                <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0 }}>EVENT INSTALLATION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" style={{ padding: '6rem 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', background: 'white', maxWidth: '1200px', margin: '0 auto' }}>
        <div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1.5rem' }}>Let's Create Something Timeless</h2>
          <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '3rem', maxWidth: '400px' }}>
            Whether you are looking for 50 custom gift sets or a curated workshop for your leadership team, our concierge is ready to assist.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '48px', height: '48px', background: '#f0f4f8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ANNUAL GIFT CATALOGUE</div>
              <p style={{ margin: '0.25rem 0 0', color: '#475569', fontSize: '0.9rem' }}>Bespoke options and gallery</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', background: '#f0f4f8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1e3a8a' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1e3a8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>RESPONSE TIME</div>
              <p style={{ margin: '0.25rem 0 0', color: '#475569', fontSize: '0.9rem' }}>Within 24 business hours</p>
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '2.5rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <form className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="auth-form-group">
              <label>Full Name</label>
              <input type="text" className="auth-input" placeholder="Arthur Morgan" />
            </div>
            <div className="auth-form-group">
              <label>Company Name</label>
              <input type="text" className="auth-input" placeholder="Orion Collective" />
            </div>
            <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Email Address</label>
              <input type="email" className="auth-input" placeholder="arthur@orion.com" />
            </div>
            <div className="auth-form-group">
              <label>Project Type</label>
              <select className="auth-input" style={{ appearance: 'none', background: 'white url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231e3a8a%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 1rem top 50%', backgroundSize: '0.65rem auto' }}>
                <option>Corporate Gifting</option>
                <option>Event Installation</option>
                <option>Custom Workshop</option>
              </select>
            </div>
            <div className="auth-form-group">
              <label>Estimated Quantity</label>
              <input type="text" className="auth-input" placeholder="e.g., 50-100 units" />
            </div>
            <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Project Details</label>
              <textarea className="auth-input" placeholder="Tell us about your timeline, aesthetic preferences, and budget..." style={{ height: '120px', resize: 'vertical' }}></textarea>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>SUBMIT INITIAL INQUIRY</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
