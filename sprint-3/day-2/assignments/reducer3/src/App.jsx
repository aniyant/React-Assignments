import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'

const dispatch = (state,{type}) => {
  switch (type) {
    case 'SHOW':
      return true;
    case 'HIDE':
      return false;
    default:
      throw new Error(`Unknown action ${type}`);
  }
}

const reducer = (state,{type}) => {
  switch(type){
    case 'TOGGLE_VISIBILITY':
      return !state;
    default:
      throw new Error(`Unknown action ${type}`);
  }

}
function App() {
  const [isVisible , dispatch] = useReducer(reducer,false);

  return (
    <>
      <h1>Welcome To React World.</h1>
      <div className="card">
        <div><p style={{visibility:isVisible?"visible":"hidden"}}>Hello World!.</p></div>
        <button onClick={() => dispatch({type:"TOGGLE_VISIBILITY"})}>
          {isVisible ? "Show Message" : "Hide Message"}
        </button>
      </div>
    </>
  )
}

export default App
