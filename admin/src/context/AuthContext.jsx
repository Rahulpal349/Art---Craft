import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('adminToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would validate the token with the backend here.
    if (token) {
      setUser({ role: 'admin', username: 'admin' });
    }
    setLoading(false);
  }, [token]);

  const login = async (username, password) => {
    try {
      // Simulate API call to the gateway
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setToken(data.token);
        setUser({ role: data.role, username });
        localStorage.setItem('adminToken', data.token);
        return true;
      } else {
        alert(data.error || 'Login failed');
        return false;
      }
    } catch (err) {
      console.error(err);
      alert('Network error');
      return false;
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('adminToken');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
