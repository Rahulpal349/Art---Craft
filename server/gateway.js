const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'art-and-craft-super-secret-key-2024';

// ==========================================
// 1. SECURITY & LOAD BALANCER MIDDLEWARE
// ==========================================

// Helmet sets various HTTP headers for security
app.use(helmet({
  crossOriginResourcePolicy: false, // Allow cross-origin if needed
}));

// CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  credentials: true
}));

// Rate Limiting (Basic DDoS protection)
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api/', apiLimiter);

// For parsing application/json (only for non-proxy routes if needed)
// app.use(express.json());

// ==========================================
// 2. SECURITY ROUTE MAPPING (AUTH)
// ==========================================

// Middleware to verify JWT token for secure admin routes
const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ error: 'Access Denied: No Token Provided' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: Admin access required' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Forbidden: Invalid or Expired Token' });
  }
};

// Example Authentication Route (Login to get token)
// Note: In a real app, you'd check a database. For now, we mock it.
app.post('/api/auth/login', express.json(), (req, res) => {
  const { username, password } = req.body;
  // Mock verification
  if (username === 'admin' && password === 'admin123') {
    const token = jwt.sign({ username: 'admin', role: 'admin' }, JWT_SECRET, { expiresIn: '8h' });
    return res.json({ token, role: 'admin' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

// ==========================================
// 3. PROXY ROUTING (GATEWAY)
// ==========================================

// Route map for Storefront API (Public/Customer operations)
// Proxy to an actual backend service running on port 5001 (mock target)
app.use('/api/public', createProxyMiddleware({
  target: 'http://localhost:5001',
  changeOrigin: true,
  pathRewrite: { '^/api/public': '' },
  onError: (err, req, res) => {
    res.status(503).json({ error: 'Storefront Service Unavailable' });
  }
}));

// Route map for Admin API (Secured operations)
// Proxies to a backend service on port 5002, but ONLY if they pass auth
app.use('/api/admin', requireAdminAuth, createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
  pathRewrite: { '^/api/admin': '' },
  onError: (err, req, res) => {
    res.status(503).json({ error: 'Admin Service Unavailable' });
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'API Gateway is running safely.' });
});

app.listen(PORT, () => {
  console.log(`[Load Balancer / Gateway] listening on port ${PORT}`);
  console.log(`- Security Route Mapping active for /api/admin/*`);
  console.log(`- Rate Limiter & Helmet enabled`);
});
