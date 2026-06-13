const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load env vars (prioritize .env.local if present)
dotenv.config({ path: path.join(__dirname, '../.env.local') });
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route files
const products = require('./routes/products');

// Mount routers
app.use('/api/products', products);

// Serve static frontend files (Storefront)
app.use(express.static(path.join(__dirname, '../client')));

// Serve static admin files (Admin Portal)
app.use('/admin', express.static(path.join(__dirname, '../admin')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));