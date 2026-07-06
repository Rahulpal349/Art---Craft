/**
 * AuthContext.jsx (Storefront)
 *
 * Replaces supabase.auth.* with calls to our AWS API Gateway → Cognito Lambda.
 * Supports login, signup, and logout for storefront customers.
 */
import { createContext, useState, useContext, useEffect } from 'react';
import { api, tokenStore } from '../lib/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = tokenStore.get();
    if (!token) {
      setLoading(false);
      return;
    }

    api.get('/auth/session')
      .then((data) => setUser(data))
      .catch(() => {
        tokenStore.clear();
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  /**
   * Customer login via Cognito.
   */
  const login = async (email, password) => {
    try {
      const data = await api.post('/auth/login', { email, password });

      tokenStore.set(data.accessToken);
      localStorage.setItem('idToken',      data.idToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      const profile = await api.get('/auth/session');
      setUser(profile);

      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  /**
   * New customer signup via Cognito.
   * Cognito sends a verification email automatically.
   */
  const signup = async (email, password, name) => {
    try {
      const data = await api.post('/auth/signup', { email, password, name });
      return { success: true, message: data.message };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  /**
   * Logout — invalidates Cognito session + clears local tokens.
   */
  const logout = async () => {
    try {
      await api.post('/auth/logout', {});
    } catch {
      // Swallow
    }
    tokenStore.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
