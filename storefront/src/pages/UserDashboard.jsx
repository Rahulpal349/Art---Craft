import { Link } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div className="dashboard-layout" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: 'calc(100vh - 80px)' }}>
      
      {/* Sidebar */}
      <aside style={{ background: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#bfdbfe', color: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a' }}>Welcome, Artisan</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Premium Member</div>
          </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', background: '#dbeafe', color: '#1e3a8a', borderRadius: '4px', textDecoration: 'none', fontWeight: 500, fontSize: '0.9rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            Curator Portal
          </Link>
          <Link to="/dashboard/collections" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#475569', textDecoration: 'none', fontSize: '0.9rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            Collections
          </Link>
          <Link to="/dashboard/orders" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#475569', textDecoration: 'none', fontSize: '0.9rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Orders
          </Link>
          <Link to="/dashboard/messages" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#475569', textDecoration: 'none', fontSize: '0.9rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Message Artist
          </Link>
          <Link to="/dashboard/settings" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#475569', textDecoration: 'none', fontSize: '0.9rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </Link>
        </nav>

        <button className="btn btn-primary" style={{ marginTop: 'auto', padding: '0.75rem', width: '100%' }}>Request Appraisal</button>
      </aside>

      {/* Main Content */}
      <main style={{ padding: '3rem 5%', background: '#fff' }}>
        
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Welcome back, Julian</h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', margin: 0 }}>Your personal curatorial collection is evolving beautifully.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase' }}>RECENT ACTIVITY</div>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#0284c7', background: '#e0f2fe', padding: '0.25rem 0.75rem', borderRadius: '12px', letterSpacing: '0.05em' }}>OUT FOR DELIVERY</div>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#0f172a', margin: '0 0 2rem' }}>Latest Acquisition: "Tidal Resonance"</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=150" alt="Item" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ fontSize: '0.9rem', color: '#475569' }}>
                Artist: <strong>Elena Moretti</strong> • Expected delivery: Tomorrow, Oct 24.
              </div>
            </div>
          </div>

          <div style={{ background: '#0f172a', borderRadius: '4px', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>TOTAL PIECES COLLECTED</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', lineHeight: 1, margin: '0 0 1rem' }}>12</div>
            <a href="#" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'white', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.05em' }}>VIEW FULL GALLERY</a>
          </div>

        </div>

        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#1e3a8a', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>PERSONAL SELECTION</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#0f172a', margin: 0 }}>Curated for Your Space</h2>
            </div>
            <Link to="/collections" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.05em' }}>EXPLORE CURATION</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            
            <div>
              <div style={{ position: 'relative', marginBottom: '1rem' }}>
                <img src="https://images.unsplash.com/photo-1544207240-8b1025eb0aeb?q=80&w=800&auto=format&fit=crop" alt="Wood Sculpture" style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', color: '#0f172a', padding: '0.25rem 0.75rem', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.05em', borderRadius: '2px' }}>ONE-OF-A-KIND</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: '0 0 0.25rem' }}>Obsidian Veil No. 4</h3>
                  <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Mixed Media on Hand-woven Silk</div>
                </div>
                <div style={{ fontWeight: 600, color: '#1e3a8a', fontSize: '1.1rem' }}>₹4,200</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=400" alt="Ceramic Set" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.25rem' }}>Azure Minimalist Set</h3>
                <div style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>₹650</div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=400&auto=format&fit=crop" alt="Painting" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', margin: '0 0 0.25rem' }}>Tidal Shift Study</h3>
                <div style={{ fontWeight: 600, color: '#475569', fontSize: '0.9rem' }}>₹1,100</div>
              </div>
            </div>

          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', borderTop: '1px solid #e2e8f0', paddingTop: '3rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Shipping Addresses</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>Manage your primary and secondary delivery destinations.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Payment Methods</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>Securely manage your saved transaction details and preferences.</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Authenticity Vault</h4>
              <p style={{ color: '#475569', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>Access digital certificates and provenance for your collection.</p>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
