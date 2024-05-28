import { useState} from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { AllRoutes } from './components/AllRoutes'
import { Products } from './pages/Products';

function App() {
  const baseUrl = ' https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products';



  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  )
}

export default App
