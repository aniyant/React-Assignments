import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import LoginPage from './LoginPage';
import WeatherSearchPage from './WeatherSearchPage';
import WeatherDetailsPage from './WeatherDetailsPage.jsx';

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<PrivateRoute element={<WeatherSearchPage />} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/search" element={<PrivateRoute element={<WeatherSearchPage />} />} />
          <Route path="/details" element={<PrivateRoute element={<WeatherDetailsPage />} />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
