/**
 * db.js — Shared PostgreSQL connection pool for Lambda handlers.
 *
 * Uses AWS Secrets Manager to retrieve RDS credentials at cold start.
 * The pool is cached in the Lambda execution context across warm invocations
 * (module-level singleton pattern).
 */
const { Pool } = require('pg');
const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

let pool = null;

async function getDbCredentials() {
  if (!process.env.DB_SECRET_ARN) {
    // Local fallback using environment variables
    require('dotenv').config({ path: require('path').join(__dirname, '../.env.migration') });
    return {
      host: process.env.RDS_HOST,
      user: process.env.RDS_USER,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DATABASE || 'artcraft',
      port: 5432
    };
  }
  const client = new SecretsManagerClient({ region: process.env.REGION || 'ap-southeast-2' });
  const command = new GetSecretValueCommand({ SecretId: process.env.DB_SECRET_ARN });
  const response = await client.send(command);
  return JSON.parse(response.SecretString);
}

/**
 * Returns a cached PostgreSQL connection pool.
 * Creates it on first call (Lambda cold start).
 */
async function getPool() {
  if (pool) return pool;

  const creds = await getDbCredentials();
  console.log('Secret ARN:', process.env.DB_SECRET_ARN);
  console.log('Fetched creds keys:', Object.keys(creds));

  pool = new Pool({
    host: creds.host,
    port: creds.port || 5432,
    database: creds.database || 'artcraft',
    user: creds.username || creds.user,
    password: creds.password,
    max: 5,              // Keep low for Lambda (shared VPC connection limit)
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
    ssl: {
      rejectUnauthorized: false  // Required for RDS SSL
    }
  });

  return pool;
}

/**
 * Convenience: run a query and return rows.
 * @param {string} text  SQL query
 * @param {Array}  params Query parameters
 */
async function query(text, params) {
  const p = await getPool();
  return p.query(text, params);
}

module.exports = { getPool, query };
