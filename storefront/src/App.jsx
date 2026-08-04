import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import './assets/styles/pages.css';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Terms = lazy(() => import('./pages/Terms'));
const CorporateOrders = lazy(() => import('./pages/CorporateOrders'));
const FAQ = lazy(() => import('./pages/FAQ'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Fallback Loader
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
    <div style={{ color: '#1e3a8a', fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontStyle: 'italic' }}>
      Loading Art & Craft...
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/corporate" element={<CorporateOrders />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/dashboard" element={<UserDashboard />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
