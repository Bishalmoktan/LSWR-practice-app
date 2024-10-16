// contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType } from "../types/auth";
import { AuthService } from "@/services/authService";

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeAuth = () => {
      const token = AuthService.getToken();

      if (token) {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = (token: string) => {
    AuthService.setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("jwt_token");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
