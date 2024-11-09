// context/auth.tsx
import { createContext, useContext, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

interface AuthContextType {
  user: any;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

import { ReactNode } from 'react';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check user authentication status
    // Replace with your authentication logic
    // const authenticatedUser = null; // Replace with your authentication logic
    const checkAuthStatus = async () => {
      try {
        // Simulate an API call to check authentication status
        const response = await fetch('/api/auth/status');
        if (response.ok) {
          const data = await response.json();
          return data.user;
        }
      } catch (error) {
        console.error('Failed to check authentication status:', error);
      }
      return null;
    };

    checkAuthStatus().then(authenticatedUser => {
      setUser(authenticatedUser);
      setLoading(false);
    });
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
