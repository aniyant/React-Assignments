import { useState } from 'react'
import './App.css'
import { useReducer } from 'react'

const reducer = (state,action) => {
  console.log(state,action)
  console.log(typeof action)
  switch (action.type) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return 0;
    default:
      throw new Error("Unknown state");
  }
}
function App() {
  const [count, dispatch] = useReducer(reducer,0)
  console.log(dispatch);
  return (
    <>

      <div className="card">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch({type:"Increase"})}>
          Increase
        </button>
        <button onClick={() => dispatch({type:"Decrease"})} disabled={count==0}>
          Decrease
        </button>
        <button onClick={() => dispatch({type:"Reset"})} disabled={count==0}>
          Reset
        </button>

      </div>
    </>
  )
}

export default App
