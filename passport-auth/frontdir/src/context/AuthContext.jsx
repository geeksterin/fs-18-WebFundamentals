import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.get("http://localhost:5001/profile", {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (error) {
      console.error("Not authenticated");
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "http://localhost:5001/login",
        { email, password },
        { withCredentials: true }
      );
      setUser(res.data.user);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      await axios.post(
        "http://localhost:5001/register",
        { email, password },
        { withCredentials: true }
      );
      return true;
    } catch (error) {
      console.error("Registration failed", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:5001/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
