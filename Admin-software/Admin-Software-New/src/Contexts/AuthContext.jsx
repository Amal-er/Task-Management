import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();
 
export const useAuth = () => useContext(AuthContext);
 
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [validCredentials, setValidCredentials] = useState({
    email: "amal@gmail.com",
    password: "12345", // Store valid credentials here
  });
 
  const login = (email, password) => {
    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
 
  const logout = () => {
    setIsAuthenticated(false);
  };
 
  // Add a resetPassword function to update the password
  const resetPassword = (newPassword) => {
    setValidCredentials((prevCredentials) => ({
      ...prevCredentials,
      password: newPassword,
    }));
    console.log("Password updated successfully!");
  };
 
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
};