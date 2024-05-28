import { useState } from 'react'
import {Link,Route,Routes} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact';

function App() {

  return (
    <>
      <nav style={{display:"flex",justifyContent:"center",gap:"30px"}}>
        <Link to='/'>Home</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/About' element={<About/>} />
      </Routes>        
    </>
  )
}

export default App
