const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

const OLD_DB = {
  host: 'artcraft-db.cfkqcu48kc2i.ap-southeast-2.rds.amazonaws.com',
  user: 'artcraft_admin',
  password: 'ArtCraft2026!',
  database: 'artcraft',
  port: 5432,
  ssl: { rejectUnauthorized: false }
};

const NEW_DB = {
  host: 'database-1.csrgyaeoef5d.us-east-1.rds.amazonaws.com',
  user: 'postgres',
  password: 'S4izp2Bw80GrMDovLiSA',
  database: 'artcraft',
  port: 5432,
  ssl: { rejectUnauthorized: false }
};

async function main() {
  const oldClient = new Client(OLD_DB);
  const newClient = new Client(NEW_DB);

  try {
    console.log('Connecting to old database...');
    await oldClient.connect();
    
    console.log('Connecting to new database...');
    await newClient.connect();

    console.log('Applying schema to new database...');
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await newClient.query(schemaSql);
    console.log('Schema applied successfully.');

    // Migrate Users
    console.log('Migrating users...');
    const { rows: users } = await oldClient.query('SELECT * FROM users');
    console.log(`Found ${users.length} users.`);
    for (const user of users) {
      await newClient.query(
        'INSERT INTO users (id, email, name, created_at) VALUES ($1, $2, $3, $4) ON CONFLICT (id) DO NOTHING',
        [user.id, user.email, user.name, user.created_at]
      );
    }

    // Migrate Products
    console.log('Migrating products...');
    const { rows: products } = await oldClient.query('SELECT * FROM products');
    console.log(`Found ${products.length} products.`);
    for (const p of products) {
      await newClient.query(
        `INSERT INTO products (id, name, description, price, regular_price, offer_price, category, stock, is_published, image, images, created_at, updated_at) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
         ON CONFLICT (id) DO NOTHING`,
        [p.id, p.name, p.description, p.price, p.regular_price, p.offer_price, p.category, p.stock, p.is_published, p.image, JSON.stringify(p.images), p.created_at, p.updated_at]
      );
    }

    // Reset sequence for products id
    console.log('Resetting products identity sequence...');
    await newClient.query(`
      SELECT setval(pg_get_serial_sequence('products', 'id'), coalesce(max(id), 0) + 1, false) FROM products;
    `);

    console.log('Migration completed successfully!');

  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    await oldClient.end();
    await newClient.end();
  }
}

main();
