export default function Contact() {
  return (
    <section className="section" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Contact Us</h2>
            <p>We'd love to hear from you</p>
        </div>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontWeight: 500, color: '#1e293b' }}>Name</label>
                <input type="text" id="name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="Your Name" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontWeight: 500, color: '#1e293b' }}>Email</label>
                <input type="email" id="email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="you@example.com" />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="message" style={{ fontWeight: 500, color: '#1e293b' }}>Message</label>
                <textarea id="message" rows="5" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1' }} placeholder="How can we help you?"></textarea>
            </div>
            
            <button type="button" className="btn btn-primary" style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                Send Message
            </button>
        </form>
    </section>
  );
}
