import React from 'react'
import { Dashboard } from '../pages/Dashboard';
import { Menu } from '../pages/Menu';
import { Login } from '../pages/Login';
import {NavLink } from 'react-router-dom';

export const Navbar = () => {
    
  return (
    <nav style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"10px",
        height:"50px",
        width:"100%",
    }}>
        <NavLink to='/' style={({isActive})=>{ return isActive?{color:"red"}:{color:"blue"}}}>Dashboard</NavLink>
        <NavLink to='/menu' style={({isActive})=>{ return isActive?{color:"red"}:{color:"blue"}}} >Menu</NavLink>
        <NavLink to='/login' style={({isActive})=>{ return isActive?{color:"red"}:{color:"blue"}}}>Login</NavLink>
    </nav>
  )
}


