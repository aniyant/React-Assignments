import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './Counter'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false)
  console.log('App is rendering...');

  useEffect(()=>{
    let timerId
    if (isRunning){
       timerId = setInterval(()=>{
        setTime((time) => time + 1)
      },1000)
      return () => {
        clearInterval(timerId)
      }
    }
  })

  const increment = useCallback(() => {
    setCount((count) => count + 1)
  },[count])

  const decrement = useCallback(() => {
    setCount((count) => count - 1)
  },[count])

  const startTimer= useCallback(() =>{
    setIsRunning(true)
  },[])

  const stopTimer= useCallback(() =>{
    setIsRunning(false)
  },[])
  const resetTimer= useCallback(() =>{
    setIsRunning(false)
    setTime(0)
  },[])

  return (
    <>   
     <Counter count={count} increment={increment} decrement={decrement} />
     <Timer time={time} isRunning={isRunning} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
    </>
  )
}

export default App
