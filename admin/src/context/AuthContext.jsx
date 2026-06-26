import { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [sessionToken, setSessionToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Automatically get the session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser({ ...session.user.user_metadata, id: session.user.id });
        setSessionToken(session.access_token);
      }
      setLoading(false);
    });

    // Listen for auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser({ ...session.user.user_metadata, id: session.user.id });
          setSessionToken(session.access_token);
        } else {
          setUser(null);
          setSessionToken(null);
        }
      }
    );

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const login = async (email, password) => {
    try {
      // 1. Call our local gateway to enforce the 2 concurrent sessions limit
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error || 'Login failed' };
      }

      // 2. Set the session natively in the Supabase frontend client
      const { error: sessionError } = await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token
      });

      if (sessionError) {
        return { success: false, error: sessionError.message };
      }
      
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: 'Network error. Make sure the API gateway is running.' };
    }
  };

  const logout = async () => {
    if (user && sessionToken) {
      // Notify gateway to free up the session slot
      try {
        await fetch('http://localhost:5000/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, token: sessionToken })
        });
      } catch (e) {
        console.error('Failed to notify gateway of logout', e);
      }
    }
    
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
