import { useState } from 'react'
import './App.css'
import { Route, Routes,NavLink} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import {Cart} from './cart';
import {PrivateRoute} from './PrivateRoute';
import {Login} from './login'

function App() {
  const defaultStyle = { color: "black" };
  const activeStyle = { color: "red" };

  return (
    <>
      <h1>Routing</h1>
      <NavLink to='/' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>Home</NavLink>
      <NavLink to='/contact' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>Contact</NavLink>
      <NavLink to='/cart' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>Cart</NavLink>
      <NavLink to='/login' style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>Login</NavLink>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route
        path='/cart' 
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
