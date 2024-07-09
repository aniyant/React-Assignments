import { useState,useReducer,useContext } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route, NavLink } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import { AuthProvider } from './components/AuthProvider'
import { Home } from './pages/Home'
import { Login } from './pages/Login'


function App() {


  return (
    <BrowserRouter>
    <AuthProvider>
      <nav>
        <button>
        <NavLink to='/'>Home</NavLink>
        </button>
        <button>
        <NavLink to='/login'>Login</NavLink>
        </button>
        {/* <NavLink to='/users'>Login</NavLink> */}
      </nav>
      <Routes>
        <Route path='/' element={
        <PrivateRoute>
          <Home/>
        </PrivateRoute>
        } />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/users' element={<Users />} /> */}
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}
export default App
