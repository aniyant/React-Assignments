import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './hook'
import DataFetchingComponent from './components/DataFetch'
import { ExpensiveOperationComponent } from './ExpensiveOps'
import { ProductFilterComponent } from './Products'

function App() {
  const [state,setState] = useToggle(false);
  

  return (
    
    <>
      {/* <button onClick={()=>setState(prev=>!prev)}>veg:{state?"yes":"no"}</button>
      <button onClick={()=>setState(prev=>!prev)}>eng:{state?"yes":"no"}</button>
      <DataFetchingComponent /> */}
      {/* <ExpensiveOperationComponent/> */}
      <ProductFilterComponent/>
    </>
  )
}

export default App
