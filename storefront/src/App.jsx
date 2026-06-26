import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import './assets/styles/pages.css';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import Terms from './pages/Terms';
import CorporateOrders from './pages/CorporateOrders';
import FAQ from './pages/FAQ';
import UserDashboard from './pages/UserDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
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
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </CartProvider>
    </AuthProvider>
  );
}

export default App;
