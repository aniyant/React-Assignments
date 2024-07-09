import React, { memo } from 'react'

const counterCheck = (prev,curr) => {
  return prev.count === curr.count;
}

export const Counter = memo(({count,increment,decrement}) => {
    console.log('counter rendering');
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
})
