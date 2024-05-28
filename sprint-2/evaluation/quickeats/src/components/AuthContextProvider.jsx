import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      navigate('/');
    }
    else{
      alert('Enter Valid Credentials');
    }
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
