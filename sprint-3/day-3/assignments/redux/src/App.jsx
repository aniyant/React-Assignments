import { useState } from 'react'
import { legacy_createStore } from 'redux';
import './App.css'

const counterReducer = (state=0,{type}) => {
  switch (type){
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    case "Reset":
      return 0;
    default:
      state;
  }
}

const store = legacy_createStore(counterReducer,0);
function App() {
  const [count, setCount] = useState(0);
  // console.log(count);
  console.log(store.getState());
  return (
    <>
      <h1>Welcome to Counter Using Redux</h1>
      <h2>Counter:{store.getState()}</h2>
      <div className="card">
        <button onClick={()=>{store.dispatch({type:"Increase"});setCount((prev)=>prev+1)}}>
          Increase
        </button>
        <button onClick={()=>{store.dispatch({type:"Decrease"});setCount((prev)=>prev-1)}} disabled={count===0}>
          Decrease
        </button>
        <button onClick={()=>{store.dispatch({type:"Reset"});setCount(0)}} disabled={count===0}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
