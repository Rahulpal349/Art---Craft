import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', color: '#1e3a8a', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif" }}>404</h1>
      <h2 style={{ fontSize: '2rem', color: '#334155', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem', maxWidth: '400px' }}>
        We couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary" style={{ padding: '0.75rem 2rem', textDecoration: 'none' }}>
        Back to Home
      </Link>
    </div>
  );
}
