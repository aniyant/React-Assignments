import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Product } from '../pages/Product';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { PrivateRouteProvider } from './PrivateRouteProvider';

export const AllRoutes = () => {
  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element= {
            <PrivateRouteProvider>
              <Products />
            </PrivateRouteProvider>
        } />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:product_id" element={<Product />} />
        </Routes>
    )
};
