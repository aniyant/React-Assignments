import { useState } from 'react'
import {Link,Route,Routes} from 'react-router-dom';
import './App.css'
import { Home } from './Home';
import { Login } from './Login';
import { Users } from './Users';

function App() {

  return (
    <>
      <nav style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <Link to='/'>Home</Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Users'>Users</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Users' element={<Users/>} />
      </Routes>        
    </>
  )
}

export default App
