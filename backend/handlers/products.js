/**
 * handlers/products.js
 *
 * AWS Lambda handler for Products CRUD.
 * Replaces all Supabase `.from('products').*` calls.
 *
 * Routes (API Gateway HTTP API):
 *   GET    /products           → list all (admin: all, storefront: published only)
 *   GET    /products/count     → total count (admin dashboard)
 *   GET    /products/{id}      → single product
 *   POST   /products           → create  [auth required]
 *   PUT    /products/{id}      → update  [auth required]
 *   DELETE /products/{id}      → delete  [auth required]
 */
const { query } = require('../db');

// ─── Helpers ────────────────────────────────────────────────────────────────

const CDN_DOMAIN = process.env.CLOUDFRONT_DOMAIN;
const S3_BUCKET  = process.env.S3_BUCKET;

/**
 * Rewrite any direct S3 URLs to the CloudFront CDN domain.
 * This ensures images are always served through CloudFront, which has
 * public read access via OAI — the S3 bucket itself blocks direct access.
 */
function rewriteImageUrl(url) {
  if (!url || !CDN_DOMAIN) return url;
  // Match both virtual-hosted and path-style S3 URLs
  if (S3_BUCKET && url.includes(S3_BUCKET)) {
    const key = url.replace(/^https?:\/\/[^/]+\//, '');
    return `https://${CDN_DOMAIN}/${key}`;
  }
  return url;
}

function fixProductImages(product) {
  if (!product) return product;
  if (product.image) product.image = rewriteImageUrl(product.image);
  if (Array.isArray(product.images)) {
    product.images = product.images.map(rewriteImageUrl);
  }
  return product;
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    },
    body: JSON.stringify(body),
  };
}

function parseBody(event) {
  try {
    return event.body ? JSON.parse(event.body) : {};
  } catch {
    return {};
  }
}

// ─── Route handlers ─────────────────────────────────────────────────────────

async function listProducts(event) {
  // Query param: ?published=true → only published (storefront)
  const onlyPublished = event.queryStringParameters?.published === 'true';

  let sql = 'SELECT * FROM products';
  const params = [];

  if (onlyPublished) {
    sql += ' WHERE is_published = $1';
    params.push(true);
  }

  sql += ' ORDER BY created_at DESC';

  const { rows } = await query(sql, params);
  return response(200, rows.map(fixProductImages));
}

async function countProducts() {
  const { rows } = await query('SELECT COUNT(*)::int AS count FROM products');
  return response(200, { count: rows[0].count });
}

async function getProduct(id) {
  const { rows } = await query('SELECT * FROM products WHERE id = $1', [id]);
  if (rows.length === 0) {
    return response(404, { error: 'Product not found' });
  }
  return response(200, fixProductImages(rows[0]));
}

async function createProduct(event) {
  const body = parseBody(event);
  const {
    name, description, price, regular_price, offer_price,
    category, stock, is_published, image, images
  } = body;

  if (!name) return response(400, { error: 'Product name is required' });

  const { rows } = await query(
    `INSERT INTO products
       (name, description, price, regular_price, offer_price, category, stock, is_published, image, images)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
     RETURNING *`,
    [
      name,
      description || null,
      parseFloat(price || regular_price) || 0,
      regular_price ? parseFloat(regular_price) : null,
      offer_price ? parseFloat(offer_price) : null,
      category || null,
      parseInt(stock, 10) || 0,
      is_published ?? false,
      image || null,
      JSON.stringify(images || [])
    ]
  );

  return response(201, fixProductImages(rows[0]));
}

async function updateProduct(id, event) {
  const body = parseBody(event);
  const {
    name, description, price, regular_price, offer_price,
    category, stock, is_published, image, images
  } = body;

  // Build dynamic SET clause
  const fields = [];
  const params = [];
  let i = 1;

  const add = (col, val) => { fields.push(`${col} = $${i++}`); params.push(val); };

  if (name !== undefined)          add('name', name);
  if (description !== undefined)   add('description', description);
  if (price !== undefined)         add('price', parseFloat(price));
  if (regular_price !== undefined) add('regular_price', regular_price ? parseFloat(regular_price) : null);
  if (offer_price !== undefined)   add('offer_price', offer_price ? parseFloat(offer_price) : null);
  if (category !== undefined)      add('category', category);
  if (stock !== undefined)         add('stock', parseInt(stock, 10));
  if (is_published !== undefined)  add('is_published', is_published);
  if (image !== undefined)         add('image', image);
  if (images !== undefined)        add('images', JSON.stringify(images));

  if (fields.length === 0) return response(400, { error: 'No fields to update' });

  // Always update updated_at
  fields.push(`updated_at = NOW()`);
  params.push(id);

  const { rows } = await query(
    `UPDATE products SET ${fields.join(', ')} WHERE id = $${i} RETURNING *`,
    params
  );

  if (rows.length === 0) return response(404, { error: 'Product not found' });
  return response(200, fixProductImages(rows[0]));
}

async function deleteProduct(id) {
  const { rowCount } = await query('DELETE FROM products WHERE id = $1', [id]);
  if (rowCount === 0) return response(404, { error: 'Product not found' });
  return response(200, { success: true });
}

// ─── Main Lambda Handler ─────────────────────────────────────────────────────

exports.handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;
  const path   = event.requestContext?.http?.path   || event.path;
  const id     = event.pathParameters?.id;

  try {
    // Special route: /products/count must come before /{id}
    if (method === 'GET' && path.endsWith('/products/count')) {
      return await countProducts();
    }

    if (method === 'GET' && !id) return await listProducts(event);
    if (method === 'GET' && id)  return await getProduct(id);
    if (method === 'POST')       return await createProduct(event);
    if (method === 'PUT' && id)  return await updateProduct(id, event);
    if (method === 'DELETE' && id) return await deleteProduct(id);

    return response(405, { error: 'Method not allowed' });
  } catch (err) {
    console.error('Products handler error:', err);
    return response(500, { error: 'Internal server error', detail: err.message });
  }
};
