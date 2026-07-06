/**
 * migrate-data.js
 *
 * Exports all data from Supabase → inserts into AWS RDS PostgreSQL.
 *
 * Usage:
 *   node scripts/migrate-data.js
 *
 * Required env vars (set in .env or export before running):
 *   SUPABASE_URL          — your Supabase project URL
 *   SUPABASE_SERVICE_KEY  — Service Role key (not anon key!) for full access
 *   RDS_HOST              — RDS endpoint
 *   RDS_USER              — DB username
 *   RDS_PASSWORD          — DB password
 *   RDS_DATABASE          — DB name (artcraft)
 */

require('dotenv').config({ path: require('path').join(__dirname, '../../.env.migration') });
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const rds = new Pool({
  host:     process.env.RDS_HOST,
  user:     process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE || 'artcraft',
  port:     5432,
  ssl:      { rejectUnauthorized: false },
});

async function migrateProducts() {
  console.log('\n🔄 Fetching products from Supabase...');

  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true });

  if (error) throw new Error(`Supabase error: ${error.message}`);
  console.log(`✅ Found ${products.length} products`);

  if (products.length === 0) {
    console.log('   Nothing to migrate.');
    return;
  }

  console.log('\n📤 Inserting into RDS...');
  let inserted = 0;
  let skipped  = 0;

  for (const p of products) {
    try {
      await rds.query(
        `INSERT INTO products
           (id, name, description, price, regular_price, offer_price,
            category, stock, is_published, image, images, created_at, updated_at)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
         ON CONFLICT (id) DO NOTHING`,
        [
          p.id,
          p.name,
          p.description || null,
          parseFloat(p.price) || 0,
          p.regular_price ? parseFloat(p.regular_price) : null,
          p.offer_price ? parseFloat(p.offer_price) : null,
          p.category || null,
          parseInt(p.stock) || 0,
          p.is_published ?? false,
          p.image || null,
          JSON.stringify(p.images || []),
          p.created_at || new Date().toISOString(),
          p.updated_at || new Date().toISOString(),
        ]
      );
      inserted++;
      process.stdout.write(`\r   Inserted ${inserted}/${products.length}...`);
    } catch (err) {
      console.warn(`\n   ⚠️  Skipped product ${p.id} (${p.name}): ${err.message}`);
      skipped++;
    }
  }

  console.log(`\n✅ Products migrated: ${inserted} inserted, ${skipped} skipped`);
}

async function main() {
  console.log('═══════════════════════════════════════════════════');
  console.log(' Art & Craft: Supabase → RDS Migration Script');
  console.log('═══════════════════════════════════════════════════');

  // Verify connections
  console.log('\n🔌 Testing Supabase connection...');
  const { error: pingErr } = await supabase.from('products').select('id').limit(1);
  if (pingErr) throw new Error(`Supabase connection failed: ${pingErr.message}`);
  console.log('✅ Supabase connected');

  console.log('🔌 Testing RDS connection...');
  await rds.query('SELECT 1');
  console.log('✅ RDS connected\n');

  await migrateProducts();

  console.log('\n🎉 Migration complete!');
  console.log('\nNext steps:');
  console.log('  1. Run image migration: node scripts/migrate-images.js');
  console.log('  2. Update image URLs in RDS to CloudFront URLs');
  console.log('  3. Update frontend env vars to point to your API');

  await rds.end();
  process.exit(0);
}

main().catch(err => {
  console.error('\n❌ Migration failed:', err.message);
  process.exit(1);
});
