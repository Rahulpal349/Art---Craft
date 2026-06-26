import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }
    fetchProducts();
  }, []);

  return (
    <div className="dashboard-content">
      <div className="topbar" style={{marginBottom: '2rem'}}>
        <div className="page-header">
            <h1>Products</h1>
            <p>Manage your store inventory.</p>
        </div>
        <Link to="/products/new" style={{textDecoration: 'none', padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-sm)', fontWeight: '600'}}>
          + Add Product
        </Link>
      </div>

      <div className="card">
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <div className="chart-placeholder">No products found. Click "Add Product" to create one.</div>
        ) : (
          <table style={{width: '100%', textAlign: 'left', borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '1px solid var(--border-color)'}}>
                <th style={{padding: '1rem'}}>Image</th>
                <th style={{padding: '1rem'}}>Name</th>
                <th style={{padding: '1rem'}}>Price</th>
                <th style={{padding: '1rem'}}>Stock</th>
                <th style={{padding: '1rem'}}>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} style={{borderBottom: '1px solid var(--border-color)'}}>
                  <td style={{padding: '1rem'}}>
                    {p.images && p.images[0] ? (
                      <img src={p.images[0]} alt={p.name} style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px'}} />
                    ) : (
                      <div style={{width: '50px', height: '50px', background: 'var(--bg-main)', borderRadius: '4px'}}></div>
                    )}
                  </td>
                  <td style={{padding: '1rem', fontWeight: '500'}}>{p.name}</td>
                  <td style={{padding: '1rem'}}>₹{p.offer_price || p.regular_price}</td>
                  <td style={{padding: '1rem'}}>{p.stock}</td>
                  <td style={{padding: '1rem'}}>
                    <span style={{
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      background: p.is_published ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: p.is_published ? 'var(--success)' : 'var(--danger)'
                    }}>
                      {p.is_published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
