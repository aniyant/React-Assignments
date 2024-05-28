import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const links = [{
        to:'/',
        label:'Home'
    },
    {
        to:'/products',
        label:'Products'
    },
    {
        to:'/login',
        label:'Login'
    },
    {
        to:'/about',
        label:'About'
    }
]
  return (
    <nav style={{
        display: 'flex',
        gap:"30px",
        justifyContent:'center',
        alignItems: 'center',
        padding: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        width: '100%',
        height: '50px',

    }}>
        {
            links.map(link=>(
            <button key={link.to}><NavLink key={link.to} to={link.to} style={({isActive})=>{ return isActive?{color:"red"}:{color:"blue"}}}>{link.label}</NavLink></button>
            ))
        }
    </nav>
  )
}
