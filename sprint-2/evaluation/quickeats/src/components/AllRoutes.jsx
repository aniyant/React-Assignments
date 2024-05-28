import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Menu } from '../pages/Menu';
import { Login } from '../pages/Login';
import { PrivateRouteProvider } from './PrivateRouteProvider';

export const AllRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={
            <PrivateRouteProvider>
                <Dashboard />
            </PrivateRouteProvider>
          } />
          <Route path="/menu" element= {
            <PrivateRouteProvider>
              <Menu />
            </PrivateRouteProvider>
        } />
          <Route path="/login" element={<Login />} />
        </Routes>
    )
};
