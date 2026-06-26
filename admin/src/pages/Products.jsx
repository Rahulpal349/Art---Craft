import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Trash2, Package, Eye, EyeOff } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (!error && data) {
      setProducts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (product) => {
    if (!window.confirm(`Delete "${product.name}"? This cannot be undone.`)) return;
    
    setDeleting(product.id);
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', product.id);

    if (!error) {
      setProducts(prev => prev.filter(p => p.id !== product.id));
    } else {
      alert('Failed to delete: ' + error.message);
    }
    setDeleting(null);
  };

  const togglePublish = async (product) => {
    const { error } = await supabase
      .from('products')
      .update({ is_published: !product.is_published })
      .eq('id', product.id);

    if (!error) {
      setProducts(prev => prev.map(p => 
        p.id === product.id ? { ...p, is_published: !p.is_published } : p
      ));
    }
  };

  const getProductImage = (product) => {
    if (product.images && product.images.length > 0) return product.images[0];
    if (product.image) return product.image;
    return null;
  };

  const getProductPrice = (product) => {
    return product.offer_price || product.regular_price || product.price || 0;
  };

  return (
    <div className="dashboard-content">
      <div className="topbar" style={{marginBottom: '2rem'}}>
        <div className="page-header">
            <h1>Products</h1>
            <p>Manage your store inventory.</p>
        </div>
        <Link to="/products/new" style={{textDecoration: 'none', padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'var(--primary-text)', borderRadius: 'var(--radius-sm)', fontWeight: '600'}}>
          + Add Product
        </Link>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <div className="card">
          <div className="chart-placeholder" style={{textAlign: 'center', padding: '3rem'}}>
            <Package size={48} style={{opacity: 0.3, marginBottom: '1rem'}} />
            <p>No products found. Click "Add Product" to create one.</p>
          </div>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {products.map(p => {
            const img = getProductImage(p);
            const price = getProductPrice(p);
            
            return (
              <div key={p.id} className="card" style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'default'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = ''; }}
              >
                {/* Product Image */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  background: 'var(--bg-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {img ? (
                    <img src={img} alt={p.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  ) : (
                    <Package size={48} style={{opacity: 0.15}} />
                  )}
                  
                  {/* Status Badge */}
                  <span style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    background: p.is_published ? 'rgba(34, 197, 94, 0.9)' : 'rgba(239, 68, 68, 0.9)',
                    color: '#fff',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {p.is_published ? 'Published' : 'Draft'}
                  </span>
                </div>

                {/* Product Info */}
                <div style={{padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column'}}>
                  <h3 style={{margin: '0 0 0.25rem', fontSize: '1.05rem', fontWeight: '600', color: 'var(--text-main)'}}>{p.name}</h3>
                  
                  {p.category && (
                    <span style={{fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem'}}>{p.category}</span>
                  )}
                  
                  {p.description && (
                    <p style={{fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{p.description}</p>
                  )}

                  <div style={{marginTop: 'auto', display: 'flex', alignItems: 'baseline', gap: '0.5rem'}}>
                    <span style={{fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)'}}>₹{price}</span>
                    {p.regular_price && p.offer_price && p.offer_price < p.regular_price && (
                      <span style={{fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through'}}>₹{p.regular_price}</span>
                    )}
                    <span style={{marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-muted)'}}>Stock: {p.stock ?? 0}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  borderTop: '1px solid var(--border-color)',
                }}>
                  <button 
                    onClick={() => togglePublish(p)}
                    title={p.is_published ? 'Unpublish' : 'Publish'}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem',
                      background: 'transparent',
                      border: 'none',
                      borderRight: '1px solid var(--border-color)',
                      color: p.is_published ? 'var(--warning, #f59e0b)' : 'var(--success)',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-main)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {p.is_published ? <><EyeOff size={15} /> Unpublish</> : <><Eye size={15} /> Publish</>}
                  </button>
                  <button 
                    onClick={() => navigate(`/products/edit/${p.id}`)}
                    title="Edit"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem',
                      background: 'transparent',
                      border: 'none',
                      borderRight: '1px solid var(--border-color)',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-main)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <Pencil size={15} /> Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(p)}
                    disabled={deleting === p.id}
                    title="Delete"
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.75rem',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--danger)',
                      cursor: deleting === p.id ? 'not-allowed' : 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      opacity: deleting === p.id ? 0.5 : 1,
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(239,68,68,0.05)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <Trash2 size={15} /> {deleting === p.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
