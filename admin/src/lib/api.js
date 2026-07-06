/**
 * api.js — Thin HTTP client replacing @supabase/supabase-js
 *
 * Drop-in replacement for all supabase.from()/supabase.auth calls.
 * Points to your AWS API Gateway endpoint.
 *
 * Usage examples:
 *   import { api } from './api';
 *
 *   // Products
 *   const products = await api.get('/products');
 *   const product  = await api.get('/products/123');
 *   await api.post('/products', { name: 'Bowl', ... });
 *   await api.put('/products/123', { is_published: true });
 *   await api.delete('/products/123');
 *
 *   // Auth
 *   const { accessToken } = await api.post('/auth/login', { email, password });
 *   const user = await api.get('/auth/session');
 *
 *   // Image upload (presigned S3)
 *   const imageUrl = await api.uploadImage(file);
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ─── Token storage ────────────────────────────────────────────────────────────

export const tokenStore = {
  get: () => localStorage.getItem('accessToken'),
  set: (token) => localStorage.setItem('accessToken', token),
  clear: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
  },
};

// ─── Core fetch wrapper ───────────────────────────────────────────────────────

async function request(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };

  const token = tokenStore.get();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body !== undefined) config.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL}${path}`, config);

  // Handle 204 No Content
  if (res.status === 204) return null;

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = data?.error || data?.message || `HTTP ${res.status}`;
    throw Object.assign(new Error(message), { status: res.status, data });
  }

  return data;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export const api = {
  get:    (path)         => request('GET',    path),
  post:   (path, body)   => request('POST',   path, body),
  put:    (path, body)   => request('PUT',    path, body),
  delete: (path)         => request('DELETE', path),

  /**
   * Upload image directly to S3 via pre-signed URL.
   * Returns the final public CDN URL of the uploaded image.
   *
   * @param {File} file  Browser File object
   * @returns {Promise<string>} Public CDN URL
   */
  async uploadImage(file) {
    // Step 1: Get a presigned PUT URL from our Lambda
    const { uploadUrl, publicUrl } = await request('POST', '/upload/presign', {
      filename: file.name,
      contentType: file.type || 'image/jpeg',
    });

    // Step 2: PUT file directly to S3 (no auth header needed — it's in the URL signature)
    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type || 'image/jpeg' },
      body: file,
    });

    if (!uploadRes.ok) throw new Error('Image upload to S3 failed');

    return publicUrl;
  },
};
