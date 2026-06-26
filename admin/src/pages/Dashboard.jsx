import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Search, TrendingUp, ShoppingCart, Box } from 'lucide-react';

function Topbar() {
  return (
    <header className="topbar">
        <div className="page-header">
            <h1>Dashboard Overview</h1>
            <p>Welcome back! Here's what's happening today.</p>
        </div>
        <div className="search-box">
            <Search size={20} color="var(--text-muted)" />
            <input type="text" placeholder="Search orders..." />
        </div>
    </header>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({ totalSales: 0, activeOrders: 0, totalProducts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      // Fetch total products
      const { count, error } = await supabase
        .from('products')
        .select('*', { count: 'exact', head: true });
        
      if (!error) {
        setStats(prev => ({ ...prev, totalProducts: count || 0 }));
      }
      
      // For now, we don't have an orders table, so activeOrders and totalSales stay 0
      setLoading(false);
    }
    fetchStats();
  }, []);

  return (
    <div className="dashboard-content">
        <Topbar />

        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-info">
                    <h3>Total Sales</h3>
                    <div className="value success">₹{stats.totalSales}</div>
                    <div className="subtext">Real data pending</div>
                </div>
                <div className="stat-icon success">
                    <TrendingUp size={24} />
                </div>
            </div>
            
            <div className="stat-card">
                <div className="stat-info">
                    <h3>Active Orders</h3>
                    <div className="value info">{stats.activeOrders}</div>
                    <div className="subtext">Real data pending</div>
                </div>
                <div className="stat-icon info">
                    <ShoppingCart size={24} />
                </div>
            </div>

            <div className="stat-card">
                <div className="stat-info">
                    <h3>Total Products</h3>
                    <div className="value danger">{loading ? '...' : stats.totalProducts}</div>
                    <div className="subtext" style={{color: 'var(--danger)'}}>From Supabase</div>
                </div>
                <div className="stat-icon danger">
                    <Box size={24} />
                </div>
            </div>
        </div>

        <div className="dashboard-grid">
            <div className="card">
                <div className="card-header">
                    <div>
                        <h2>Revenue over time</h2>
                        <p>Detailed sales performance tracking (Last 6 months)</p>
                    </div>
                    <button className="btn-filter">Last 6 Months</button>
                </div>
                <div className="chart-placeholder">
                    Chart Data Unavailable
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h2>Recent Activity</h2>
                </div>
                <div className="activity-list">
                    <div className="chart-placeholder" style={{height: '100px', border: 'none'}}>
                        No recent activity found.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
