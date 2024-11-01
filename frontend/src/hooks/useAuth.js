// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext'; // Ensure this points to the correct path

// Custom hook to use the Auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default useAuth; // This exports the default function correctly
