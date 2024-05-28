import logo from './logo.svg';
import './App.css';
import { useState, useEffect,useRef } from'react';

function App() {
  const initialTimer = {
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  
  const [time, setTime] = useState(initialTimer);
  const [isTimerRunning,setIsTimerRunning] = useState(false);
  const timerId = useRef(null);
  const [cursor,setCursor] = useState(0);

  useEffect(()=>{
    if(isTimerRunning){
        timerId.current = setInterval(()=>{
        setTime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds/60);
          const newHours = prevTime.hours + Math.floor(newMinutes/60);
          return {
            hours: newHours % 24 ,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60
          }
        })
      
      },1000);
    }
    console.log(time);
    return ()=>{
      clearInterval(timerId.current);
    }
  },[isTimerRunning]);

  console.log(time);
  console.log(isTimerRunning);
  console.log(timerId.current);

  const startTimer = () => {
    setIsTimerRunning(true);
  }

  const stopTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerId.current);
    console.log(setIsTimerRunning)
  }
  
  const resetTimer = () => {
    setIsTimerRunning(false);
    clearInterval(timerId.current);
    setTime(initialTimer);
  }

  const cursorPosition = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let pos = `X: ${x} | Y: ${y}`;

    setCursor(pos);
  }

  useEffect(() => {
    window.addEventListener("mousemove",cursorPosition);
    return () => {
      window.removeEventListener("mousemove",cursorPosition);
    }
  },[])


  return (
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
      <button onClick={startTimer} disabled={isTimerRunning}>Start</button> 
      <button onClick={stopTimer} disabled={!isTimerRunning}>Stop</button>
      <button onClick={resetTimer} disabled={time.hours===0 && time.minutes===0 && time.seconds ===0}>Reset</button>
      </div>

      <div>
      <h1>window mouse movement event</h1>
      <p>cursor Position: {cursor}</p>
      </div>
    </div>
  );
}

export default App;
