import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

const reducer = (state,action) => {
  console.log("state"+state);
  console.log(action)
  switch (action.type) {
    case "white":
      return "grey";
    case "grey":
      return "white";
    default:
      throw new Error("Invalid action ");
  }
}

function App() {
  const [theme,dispatch] = useReducer(reducer,"white");
  console.log("them"+theme);
  console.log("dispatch"+dispatch);

  const toggleMode = () => {
    dispatch({type:theme})
  }
  return (
    <>
      <div style={{backgroundColor:theme, margin:"auto",padding:"20px",height:"100vh", width:"1000px"}}>
        <button style={{color:theme === 'white' ? "white":"black", backgroundColor:theme === 'white' ? "grey":"white"}} onClick={toggleMode}>Change Theme</button>
      </div>
    </>
  )
}

export default App
