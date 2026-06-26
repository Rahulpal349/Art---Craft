const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://jsurpluwwqrujaohbatc.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_gBq5FXF-Q7VQ61yY9pXXDA_wR31BUwA';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const activeSessions = new Map(); // userId -> Set of session tokens

const app = express();
const PORT = process.env.PORT || 5000;

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

// (Unused) Middleware for local admin routes if needed in the future
const requireAdminAuth = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access Denied: No Token Provided' });
  }

  try {
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data.user) {
      return res.status(403).json({ error: 'Forbidden: Invalid Token' });
    }
    req.user = data.user;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Forbidden' });
  }
};

// Example Authentication Route (Login to get token)
app.post('/api/auth/login', express.json(), async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    const userId = data.user.id;

    if (!activeSessions.has(userId)) {
      activeSessions.set(userId, new Set());
    }

    const userSessions = activeSessions.get(userId);

    // Limit to 2 concurrent sessions
    if (userSessions.size >= 2) {
      return res.status(403).json({ error: 'Maximum of 2 concurrent sessions allowed. Please log out from another device first.' });
    }

    // Add this new session
    userSessions.add(data.session.access_token);

    return res.json({ 
      session: data.session,
      user: data.user
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Logout route to free up a session slot
app.post('/api/auth/logout', express.json(), (req, res) => {
  const { userId, token } = req.body;
  if (userId && token && activeSessions.has(userId)) {
    activeSessions.get(userId).delete(token);
  }
  return res.json({ success: true });
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
