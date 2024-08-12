import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated,setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") ? JSON.parse(localStorage.getItem("isAuthenticated")) : false)

  
  const login = () => {
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    setIsAuthenticated(false);
  };
  
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [login,logout]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
