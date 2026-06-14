import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { useState } from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
        <div className="sidebar-logo">
            <img src="/assets/images/logo.svg" alt="Logo" style={{height:"24px", verticalAlign:"middle", marginRight:"8px"}} />
            Art & Craft Admin
        </div>
        <ul className="nav-menu">
            <li className="nav-item">
                <Link to="/" className="nav-link active">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
                <Link to="/orders" className="nav-link">Orders</Link>
            </li>
            <li className="nav-item">
                <Link to="/customers" className="nav-link">Customers</Link>
            </li>
        </ul>
    </aside>
  );
}

function Topbar() {
  const { logout, user } = useAuth();
  return (
    <header className="topbar">
        <div className="search-bar">
            <input type="text" placeholder="Search anything..." />
        </div>
        <div className="topbar-actions">
            <span>{user?.username || 'Admin User'}</span>
            <button onClick={logout} className="btn btn-primary" style={{padding: "8px 16px", background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)'}}>Logout</button>
        </div>
    </header>
  );
}

function Dashboard() {
  return (
    <div>
        <div className="header-actions">
            <h1>Dashboard</h1>
            <button className="btn btn-primary">+ Add Product</button>
        </div>

        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-value">₹1,24,500</div>
                <div className="stat-label">Total Revenue</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">48</div>
                <div className="stat-label">Orders (This Month)</div>
            </div>
            <div className="stat-card">
                <div className="stat-value">12</div>
                <div className="stat-label">Active Products</div>
            </div>
        </div>
    </div>
  );
}

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate('/');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center', color: '#1e3a8a' }}>Admin Portal</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }} />
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '0.75rem', border: '1px solid #cbd5e1', borderRadius: '4px' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', background: '#1e3a8a', color: 'white', padding: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

// Security Route Mapping
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading secure environment...</div>;
  if (!user) return <Navigate to="/login" replace />;
  
  return (
    <div className="admin-layout">
      <Sidebar />
      <main className="main-content">
        <Topbar />
        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute><div><h2>Products</h2><p>Coming Soon</p></div></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><div><h2>Orders</h2><p>Coming Soon</p></div></ProtectedRoute>} />
          <Route path="/customers" element={<ProtectedRoute><div><h2>Customers</h2><p>Coming Soon</p></div></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
