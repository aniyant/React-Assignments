import React, { memo } from 'react'

let Timer = memo(({time,isRunning,startTimer,stopTimer,resetTimer}) => {
    console.log('Timer is running');
  return (
    <div>
        <h1>Timer:{time}</h1>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
})

export default Timer = memo(Timer);
