import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Star,
  BarChart,
  Moon,
  Sun,
  LogOut,
} from 'lucide-react';

export default function Sidebar() {
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
