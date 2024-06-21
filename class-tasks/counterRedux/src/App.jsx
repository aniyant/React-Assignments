import { useState } from 'react'
import './App.css'
import {combineReducers, legacy_createStore} from 'redux';

const counterReducer = (state=0,action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
}

const nameReducer = (state='',action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.payload;
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  counter:counterReducer,
  name:nameReducer,
}) ;
const store = legacy_createStore(rootReducer);
function App() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('');
  console.log(store.getState())
  return (
    <>
      <div className="card">
        <h1>{store}</h1>
      </div>
      <div className="card">
        <button onClick={() => {store.dispatch({type:"INCREMENT"});setCount((prev)=>prev+1)}}>
          Increase
        </button>
      </div>
      <div>
        <h1>username:{store}</h1>
        <input type='text' name='name' value={name} placeholder='username' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={() => {store.dispatch({type:"SET_NAME",payload:name});setName('')}}>
          login
        </button>
      </div>
    </>
  )
}

export default App
