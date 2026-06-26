import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if no user is found
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const userName = user.name || user.email?.split('@')[0] || 'Artisan';

  return (
    <div className="dashboard-layout" style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: 'calc(100vh - 80px)' }}>
      
      {/* Sidebar */}
      <aside style={{ background: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#bfdbfe', color: '#1e3a8a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a' }}>Welcome, {userName}</div>
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
          <button 
            onClick={async () => {
              await logout();
              navigate('/login');
            }} 
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: '#ef4444', textDecoration: 'none', fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', width: '100%', textAlign: 'left', marginTop: 'auto' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Log Out
          </button>
        </nav>

        <button className="btn btn-primary" style={{ marginTop: 'auto', padding: '0.75rem', width: '100%' }}>Request Appraisal</button>
      </aside>

      {/* Main Content */}
      <main style={{ padding: '3rem 5%', background: '#fff' }}>
        
        <div style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: '#0f172a', margin: '0 0 0.5rem' }}>Welcome to your Dashboard, {userName}</h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', margin: 0 }}>Your personal curatorial collection starts here.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '1.5rem', marginBottom: '4rem' }}>
          
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '4px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '200px' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>RECENT ACTIVITY</div>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>No recent activity to display.</p>
          </div>

          <div style={{ background: '#0f172a', borderRadius: '4px', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem' }}>TOTAL PIECES COLLECTED</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', lineHeight: 1, margin: '0 0 1rem' }}>0</div>
            <Link to="/collections" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'white', textDecoration: 'underline', textTransform: 'uppercase', letterSpacing: '0.05em' }}>START COLLECTING</Link>
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

          <div style={{ padding: '3rem', textAlign: 'center', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '4px' }}>
            <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Your personalized curation will appear here as you browse the gallery.</p>
            <Link to="/collections" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem', textDecoration: 'none' }}>Browse Gallery</Link>
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
