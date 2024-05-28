import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  const increaseCount = () => {
    setCount((prevCount)=> prevCount+1);
  }
  const decreaseCount = () => {
    setCount((prevCount)=> {
      if(prevCount === 0){
        alert('Already Zero');
        return prevCount;
      }
      return prevCount-1;
    });
  }

  const resetCount = () => {
    setCount(0);
  }
  return (
    <div className="App">
      <h1 style={{
        marginTop: '50px',
      }}>Count: {count}</h1>
      <div style={{
        display: 'flex',
        justifyContent:'space-around',
        width: '300px',
        padding: '10px',
        margin: 'auto',
        border: '1px solid black',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
        backgroundColor: 'white',
        color: 'black'
      }}>
      <button onClick={increaseCount}>Increase</button> 
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={resetCount} disabled={count === 0}>Reset</button>
      </div>
    </div>
  );
}

export default App;
