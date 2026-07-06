const { getPool, query } = require('./db');

async function check() {
  try {
    const res = await query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_name = 'products';
    `);
    console.log("Products table schema:", res.rows);
  } catch (err) {
    console.error("DB error:", err);
  }
  process.exit();
}

check();
