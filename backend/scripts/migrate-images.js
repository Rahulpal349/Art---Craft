/**
 * migrate-images.js
 *
 * Migrates product images from Supabase Storage → AWS S3.
 * After upload, updates RDS product rows with the new S3/CloudFront URLs.
 *
 * Usage:
 *   node scripts/migrate-images.js
 *
 * Required env vars (in .env.migration):
 *   SUPABASE_URL, SUPABASE_SERVICE_KEY
 *   RDS_HOST, RDS_USER, RDS_PASSWORD, RDS_DATABASE
 *   AWS_REGION, S3_BUCKET, CLOUDFRONT_DOMAIN (optional)
 */

require('dotenv').config({ path: require('path').join(__dirname, '../../.env.migration') });
const { createClient } = require('@supabase/supabase-js');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { Pool } = require('pg');
const https = require('https');
const http = require('http');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const s3 = new S3Client({ region: process.env.AWS_REGION || 'ap-south-1' });
const BUCKET = process.env.S3_BUCKET;
const CDN_DOMAIN = process.env.CLOUDFRONT_DOMAIN;

const rds = new Pool({
  host:     process.env.RDS_HOST,
  user:     process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE || 'artcraft',
  port:     5432,
  ssl:      { rejectUnauthorized: false },
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    proto.get(url, (res) => {
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve({ buffer: Buffer.concat(chunks), contentType: res.headers['content-type'] }));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function toS3Key(url) {
  // Generate a stable S3 key derived from the Supabase URL path
  const parts = url.split('/');
  const filename = parts[parts.length - 1].split('?')[0];
  return `products/migrated-${filename}`;
}

function toPublicUrl(key) {
  return CDN_DOMAIN
    ? `https://${CDN_DOMAIN}/${key}`
    : `https://${BUCKET}.s3.amazonaws.com/${key}`;
}

async function uploadImageToS3(imageUrl) {
  if (!imageUrl || !imageUrl.startsWith('http')) return imageUrl;

  const key = toS3Key(imageUrl);

  const { buffer, contentType } = await downloadBuffer(imageUrl);

  await s3.send(new PutObjectCommand({
    Bucket: BUCKET,
    Key: key,
    Body: buffer,
    ContentType: contentType || 'image/jpeg',
  }));

  return toPublicUrl(key);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log(' Art & Craft: Supabase Storage → S3 Image Migration');
  console.log('═══════════════════════════════════════════════════');

  // Fetch all products with images from RDS (already migrated data)
  const { rows: products } = await rds.query(
    'SELECT id, image, images FROM products WHERE image IS NOT NULL OR images != \'[]\'::jsonb'
  );

  console.log(`\n🖼️  Found ${products.length} products with images\n`);

  let updated = 0;

  for (const product of products) {
    try {
      let newImage = product.image;
      let newImages = typeof product.images === 'string'
        ? JSON.parse(product.images)
        : (product.images || []);

      // Migrate main image
      if (product.image && product.image.includes('supabase')) {
        console.log(`   Migrating image for product ${product.id}...`);
        newImage = await uploadImageToS3(product.image);
      }

      // Migrate images array
      if (newImages.length > 0) {
        newImages = await Promise.all(
          newImages.map(url =>
            url.includes('supabase') ? uploadImageToS3(url) : Promise.resolve(url)
          )
        );
      }

      // Update RDS with new S3/CloudFront URLs
      await rds.query(
        'UPDATE products SET image = $1, images = $2::jsonb WHERE id = $3',
        [newImage, JSON.stringify(newImages), product.id]
      );

      updated++;
      console.log(`   ✅ Updated product ${product.id}`);
    } catch (err) {
      console.warn(`   ⚠️  Failed for product ${product.id}: ${err.message}`);
    }
  }

  console.log(`\n🎉 Image migration complete! ${updated}/${products.length} products updated.`);
  await rds.end();
}

main().catch(err => {
  console.error('\n❌ Image migration failed:', err.message);
  process.exit(1);
});
