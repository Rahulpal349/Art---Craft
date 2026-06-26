import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

export default function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    regular_price: '',
    offer_price: '',
    stock: '0',
    is_published: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 5); // Limit to 5
      setImages(files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Upload Images
      const imageUrls = [];
      for (const file of images) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;
        
        const { data: publicUrlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);
          
        imageUrls.push(publicUrlData.publicUrl);
      }

      // 2. Insert Product
      const product = {
        name: formData.name,
        description: formData.description,
        regular_price: parseFloat(formData.regular_price),
        offer_price: formData.offer_price ? parseFloat(formData.offer_price) : null,
        stock: parseInt(formData.stock, 10),
        is_published: formData.is_published,
        images: imageUrls
      };

      const { error: insertError } = await supabase
        .from('products')
        .insert([product]);

      if (insertError) throw insertError;

      // 3. Navigate back
      navigate('/products');
    } catch (err) {
      setError(err.message || 'An error occurred during submission. Check your Supabase tables and storage buckets.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-content">
      <div className="page-header" style={{marginBottom: '2rem'}}>
        <h1>Add New Product</h1>
        <p>Create a new product listing in your store.</p>
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
            <textarea name="description" rows="4" value={formData.description} onChange={handleChange} style={{padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', color: 'var(--text-main)'}}></textarea>
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

          <div className="form-group" style={{display: 'flex', flexDirection: 'column', marginBottom: '1.5rem'}}>
            <label style={{marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Product Images (Up to 5)</label>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} style={{border: 'none', padding: 0, color: 'var(--text-main)'}} />
            <div style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem'}}>
              {images.length} file(s) selected
            </div>
          </div>

          <div className="form-group" style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <input type="checkbox" name="is_published" checked={formData.is_published} onChange={handleChange} style={{width: 'auto', marginBottom: 0}} />
            <label style={{marginBottom: 0, color: 'var(--text-main)'}}>Publish to store immediately</label>
          </div>

          <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
            <button type="submit" disabled={loading} style={{padding: '0.8rem 1.5rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer'}}>
              {loading ? 'Saving...' : 'Save Product'}
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
