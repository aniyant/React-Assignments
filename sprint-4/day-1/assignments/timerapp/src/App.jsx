import { useState } from 'react'
import './App.css'
import { useTimer } from './useTimer'

function App() {
  const [time,isRunning,startTimer,stopTimer,resetTimer] = useTimer({
    seconds:0,
    minutes:0,
    hours:0,
  });

  return (
    <>
    <div className="App">
       <h1 style={{
        marginTop: '50px',
      }}>{String(time.hours).padStart(2,'0')}:
             {String(time.minutes).padStart(2,'0')}:
             {String(time.seconds).padStart(2,'0')}</h1>
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
      <button onClick={startTimer} disabled={isRunning}>Start</button> 
      <button onClick={stopTimer} disabled={!isRunning}>Stop</button>
      <button onClick={resetTimer} disabled={time.hours===0 && time.minutes===0 && time.seconds ===0}>Reset</button>
      </div>

    </div>
    </>
  )
}

export default App
