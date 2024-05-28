import { useContext, useState } from 'react'
import './App.css'
import { ThemeContext } from './ThemeContext';
import { Login } from './Login';

function App() {
  const [theme, setTheme] = useContext(ThemeContext)
  const toggleMode = () => {
        setTheme(theme === 'grey'? 'yellow' : 'grey')
  }

  return (
    <>
        <div style={{backgroundColor:theme,width:"100%",height:"100vh"}}>
            <div style={{margin:"50px",padding:"20px"}}>
              <button onClick={toggleMode}>Switch Theme To {theme === 'grey'? 'yellow' : 'grey'}</button>
            </div>
            <Login/>
        </div>
    </>
  )
}

export default App
