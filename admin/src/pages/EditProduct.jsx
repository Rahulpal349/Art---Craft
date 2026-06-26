import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    regular_price: '',
    offer_price: '',
    category: '',
    stock: '0',
    is_published: false
  });

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single();

      if (error || !data) {
        setError('Product not found');
      } else {
        setFormData({
          name: data.name || '',
          description: data.description || '',
          price: data.price?.toString() || '',
          regular_price: data.regular_price?.toString() || '',
          offer_price: data.offer_price?.toString() || '',
          category: data.category || '',
          stock: data.stock?.toString() || '0',
          is_published: data.is_published || false
        });
      }
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const updates = {
        name: formData.name,
        description: formData.description || null,
        price: parseFloat(formData.price || formData.regular_price),
        regular_price: formData.regular_price ? parseFloat(formData.regular_price) : null,
        offer_price: formData.offer_price ? parseFloat(formData.offer_price) : null,
        category: formData.category || null,
        stock: parseInt(formData.stock, 10),
        is_published: formData.is_published
      };

      const { error: updateError } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id);

      if (updateError) throw updateError;

      navigate('/products');
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message || 'Failed to update product.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="dashboard-content"><p>Loading product...</p></div>;

  return (
    <div className="dashboard-content">
      <div className="page-header" style={{marginBottom: '2rem'}}>
        <h1>Edit Product</h1>
        <p>Update product details.</p>
      </div>

      {error && <div style={{padding: '1rem', background: 'var(--danger)', color: 'white', borderRadius: 'var(--radius-sm)', marginBottom: '1rem'}}>{error}</div>}

      <div className="card">
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group" style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
            <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Product Name *</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}} />
          </div>

          <div className="form-group" style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
            <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Description</label>
            <textarea name="description" rows="4" value={formData.description} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)', resize: 'vertical'}}></textarea>
          </div>

          <div className="form-group" style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
            <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="e.g. Paintings, Crafts, Sculptures" style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}} />
          </div>

          <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
            <div className="form-group" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
              <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Regular Price (₹) *</label>
              <input type="number" step="0.01" name="regular_price" required value={formData.regular_price} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}} />
            </div>
            <div className="form-group" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
              <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Offer Price (₹)</label>
              <input type="number" step="0.01" name="offer_price" value={formData.offer_price} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}} />
            </div>
            <div className="form-group" style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
              <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Stock *</label>
              <input type="number" name="stock" required value={formData.stock} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}} />
            </div>
          </div>

          <div className="form-group" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <input type="checkbox" name="is_published" checked={formData.is_published} onChange={handleChange} style={{width: 'auto', marginBottom: 0}} />
            <label style={{marginBottom: 0, color: 'var(--text-main)'}}>Published</label>
          </div>

          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
            <button type="submit" disabled={saving} style={{padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '600', cursor: saving ? 'not-allowed' : 'pointer'}}>
              {saving ? 'Saving...' : 'Update Product'}
            </button>
            <button type="button" onClick={() => navigate('/products')} style={{padding: '0.8rem 1.5rem', background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', fontWeight: '600', cursor: 'pointer'}}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
