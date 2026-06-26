import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Store,
  Users,
  Star,
  BarChart,
  Image as ImageIcon,
  Moon,
  Sun,
  LogOut,
} from 'lucide-react';
import './admin.css';

// Import Pages
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Reviews from './pages/Reviews';
import Analytics from './pages/Analytics';
import Login from './pages/Login';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(t => t === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const { logout, user } = useAuth();
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Orders', path: '/orders', icon: ShoppingCart },
    { name: 'Customers', path: '/customers', icon: Users },
    { name: 'Reviews', path: '/reviews', icon: Star },
    { name: 'Analytics', path: '/analytics', icon: BarChart },
  ];

  return (
    <aside className="sidebar">
        <div className="sidebar-profile">
            <div className="avatar">
                {user?.name ? user.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : (user?.username ? user.username.substring(0, 2).toUpperCase() : 'RP')}
            </div>
            <div className="user-info">
                <span className="role">Admin</span>
                <span className="name">{user?.name || user?.username || 'Rahul Pal'}</span>
            </div>
        </div>
        
        <ul className="nav-menu">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path || (location.pathname.startsWith(item.path) && item.path !== '/');
              return (
                <li className="nav-item" key={item.path}>
                    <Link to={item.path} className={isActive ? "active" : ""}>
                        <Icon size={20} />
                        {item.name}
                    </Link>
                </li>
              );
            })}
        </ul>

        <div className="bottom-actions">
            <button className="btn-darkmode" onClick={toggleTheme}>
                {theme === 'dark' ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
            </button>
            <button className="btn-signout" onClick={logout}>
                <LogOut size={20} />
                Sign Out
            </button>
        </div>
    </aside>
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
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
            <Route path="/products/new" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
            <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
            <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
            <Route path="/reviews" element={<ProtectedRoute><Reviews /></ProtectedRoute>} />
            <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
