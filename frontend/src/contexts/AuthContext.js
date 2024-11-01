// src/contexts/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Manage user state

  const login = (userData) => {
    setUser(userData); // Update user state on login
  };

  const logout = () => {
    setUser(null); // Clear user state on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext); // Custom hook to access AuthContext
};
