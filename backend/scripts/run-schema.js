const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config({ path: path.join(__dirname, '../../.env.migration') });

async function runSchema() {
  const masterClient = new Client({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: 'postgres', // Connect to default DB first
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await masterClient.connect();
    console.log('Connected to default postgres DB!');
    
    // Create the database if it doesn't exist
    const res = await masterClient.query("SELECT 1 FROM pg_database WHERE datname = 'artcraft'");
    if (res.rowCount === 0) {
      console.log('Creating artcraft database...');
      await masterClient.query('CREATE DATABASE artcraft');
      console.log('Database created.');
    }
  } catch (err) {
    console.error('Error creating database:', err);
    return;
  } finally {
    await masterClient.end();
  }

  // Now connect to the new database
  const client = new Client({
    host: process.env.RDS_HOST,
    user: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE || 'artcraft',
    port: 5432,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log('Connected to artcraft DB!');

    const sql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    await client.query(sql);
    console.log('Schema applied successfully!');
  } catch (err) {
    console.error('Error applying schema:', err);
  } finally {
    await client.end();
  }
}

runSchema();
