/**
 * api.js — Thin HTTP client replacing @supabase/supabase-js
 * (Storefront copy — identical to admin/src/lib/api.js)
 */

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const tokenStore = {
  get: () => localStorage.getItem('accessToken'),
  set: (token) => localStorage.setItem('accessToken', token),
  clear: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('idToken');
    localStorage.removeItem('refreshToken');
  },
};

async function request(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };

  const token = tokenStore.get();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const config = { method, headers };
  if (body !== undefined) config.body = JSON.stringify(body);

  const res = await fetch(`${BASE_URL}${path}`, config);

  if (res.status === 204) return null;

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const message = data?.error || data?.message || `HTTP ${res.status}`;
    throw Object.assign(new Error(message), { status: res.status, data });
  }

  return data;
}

export const api = {
  get:    (path)         => request('GET',    path),
  post:   (path, body)   => request('POST',   path, body),
  put:    (path, body)   => request('PUT',    path, body),
  delete: (path)         => request('DELETE', path),

  async uploadImage(file) {
    const { uploadUrl, publicUrl } = await request('POST', '/upload/presign', {
      filename: file.name,
      contentType: file.type || 'image/jpeg',
    });

    const uploadRes = await fetch(uploadUrl, {
      method: 'PUT',
      headers: { 'Content-Type': file.type || 'image/jpeg' },
      body: file,
    });

    if (!uploadRes.ok) throw new Error('Image upload to S3 failed');

    return publicUrl;
  },
};
