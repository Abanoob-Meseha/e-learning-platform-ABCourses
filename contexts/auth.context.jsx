import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  loggedIn : false
});

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};