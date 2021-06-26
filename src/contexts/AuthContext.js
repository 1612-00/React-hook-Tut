import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  // State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   alert(
  //     isAuthenticated
  //       ? "Login Successful"
  //       : "You are logged out. Please login to see todos"
  //   );
  // }, [isAuthenticated]);

  // Toggle auth
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const authContextData = {
    isAuthenticated,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
