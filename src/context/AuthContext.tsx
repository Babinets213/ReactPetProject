"use client";
import React, {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { authService } from "../services/auth";

type User = {
  id: string;
  email: string;
  role?: string;
};

type AuthContextType = {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => void;
  error: string | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

// Helper function to decode JWT payload (basic decoding, not verification)
function decodeJWT(
  token: string,
): { sub?: string; role?: string; email?: string; exp?: number } | null {
  try {
    const payload = token.split(".")[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setAccessToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else if (storedToken) {
      // If we only have token, try to decode user info from it
      const decoded = decodeJWT(storedToken);
      if (decoded && decoded.sub) {
        const userData: User = {
          id: decoded.sub,
          email: decoded.email || "",
          role: decoded.role,
        };
        setUser(userData);
        setAccessToken(storedToken);
        localStorage.setItem("user", JSON.stringify(userData));
      }
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authService.signIn({ email, password });
      const token = response.accessToken;

      // Decode JWT to get user info
      const decoded = decodeJWT(token);
      const userData: User = {
        id: decoded?.sub || "",
        email: email, // Use provided email since JWT might not contain it
        role: decoded?.role,
      };

      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setAccessToken(token);
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await authService.signUp({ email, password });
      const token = response.accessToken;

      // Decode JWT to get user info
      const decoded = decodeJWT(token);
      const userData: User = {
        id: decoded?.sub || "",
        email: email, // Use provided email since JWT might not contain it
        role: decoded?.role,
      };

      localStorage.setItem("accessToken", token);
      localStorage.setItem("user", JSON.stringify(userData));
      setAccessToken(token);
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
    setAccessToken(null);
    setError(null);
    authService.logout();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        loading,
        signIn,
        signUp,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
