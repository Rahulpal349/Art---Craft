export default function Contact() {
  return (
    <div className="contact-page" style={{ padding: '6rem 5%', background: '#fff' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginBottom: '4rem' }}>
        <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: '#0f172a', margin: '0 0 1.5rem', maxWidth: '800px', lineHeight: 1.2 }}>
          Connect with our Studio for Bespoke Commissions and Curated Inquiries.
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '600px', lineHeight: 1.6 }}>
          We believe in the power of the hand-made. Whether you're an interior designer, a collector, or looking for a unique piece, we are here to assist.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', maxWidth: '1200px', margin: '0 auto', marginBottom: '8rem' }}>
        
        {/* Contact Form */}
        <div style={{ border: '1px solid #e2e8f0', padding: '3rem', borderRadius: '4px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0f172a', marginBottom: '2rem' }}>Send a Message</h2>
          <form className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="auth-form-group">
              <label>Full Name</label>
              <input type="text" className="auth-input" placeholder="Julian Thorne" style={{ border: 'none', borderBottom: '1px solid #e2e8f0', borderRadius: 0, padding: '0.75rem 0' }} />
            </div>
            <div className="auth-form-group">
              <label>Email Address</label>
              <input type="email" className="auth-input" placeholder="julian@example.com" style={{ border: 'none', borderBottom: '1px solid #e2e8f0', borderRadius: 0, padding: '0.75rem 0' }} />
            </div>
            <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Inquiry Type</label>
              <select className="auth-input" style={{ border: 'none', borderBottom: '1px solid #e2e8f0', borderRadius: 0, padding: '0.75rem 0', appearance: 'none', background: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 0 top 50%', backgroundSize: '0.65rem auto' }}>
                <option>Bespoke Commission</option>
                <option>General Inquiry</option>
                <option>Press & Media</option>
              </select>
            </div>
            <div className="auth-form-group" style={{ gridColumn: '1 / -1' }}>
              <label>Your Message</label>
              <textarea className="auth-input" placeholder="Tell us about your project or interest..." style={{ border: 'none', borderBottom: '1px solid #e2e8f0', borderRadius: 0, padding: '0.75rem 0', height: '100px', resize: 'vertical' }}></textarea>
            </div>
            <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
              <button type="button" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Send Inquiry
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </form>
        </div>

        {/* Info Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: '#f0f8ff', padding: '2rem', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#0f172a', marginBottom: '1.5rem' }}>The Studio</h3>
            
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '0.25rem' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '0.25rem', fontSize: '0.9rem' }}>London Atelier</strong>
                <span style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.5 }}>42 Artisan Row, Shoreditch<br/>London, E1 6PX</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div>
                <strong style={{ display: 'block', color: '#0f172a', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Direct Email</strong>
                <span style={{ color: '#475569', fontSize: '0.9rem' }}>studio@artandcraft.com</span>
              </div>
            </div>
          </div>

          <div style={{ background: '#f1f5f9', padding: '2rem', borderRadius: '4px' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Concierge Support</div>
            <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              For immediate assistance regarding ongoing orders or gallery availability, connect via our WhatsApp concierge.
            </p>
            <button style={{ background: 'none', border: '1px solid #94a3b8', padding: '0.75rem 1.5rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#0f172a', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              WhatsApp Concierge
            </button>
          </div>

          <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop" alt="Studio Shelf" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', filter: 'grayscale(100%)' }} />
        </div>
      </div>

      {/* Map Section */}
      <div style={{ background: '#f8fafc', padding: '6rem 0', margin: '0 -5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 1rem' }}>Where Craft Meets Home</h2>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Our studio is located in the heart of London's craft district. We welcome scheduled viewings for our permanent collection and upcoming limited edition releases.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.05em' }}>View on Maps</a>
              <a href="#" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Book a Visit</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: '#1e293b', padding: '1rem', borderRadius: '32px', width: '300px', height: '600px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden', background: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop) center/cover' }}>
                {/* Simulated Map UI */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
