import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
        <div className="sidebar-logo">
            <img src="/assets/images/logo.svg" alt="Logo" style={{height:"24px", verticalAlign:"middle", marginRight:"8px"}} />
            Artisanat Admin
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
  return (
    <header className="topbar">
        <div className="search-bar">
            <input type="text" placeholder="Search anything..." />
        </div>
        <div className="topbar-actions">
            <span>Admin User</span>
            <Link to="/login" className="btn btn-primary" style={{padding: "8px 16px"}}>Logout</Link>
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

function App() {
  return (
    <Router>
      <div className="admin-layout">
        <Sidebar />
        <main className="main-content">
          <Topbar />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<div><h2>Products</h2><p>Coming Soon</p></div>} />
              <Route path="/orders" element={<div><h2>Orders</h2><p>Coming Soon</p></div>} />
              <Route path="/customers" element={<div><h2>Customers</h2><p>Coming Soon</p></div>} />
              <Route path="/login" element={<div><h2>Admin Login</h2><p>Coming Soon</p></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
