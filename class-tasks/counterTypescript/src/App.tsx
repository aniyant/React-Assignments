import { useState } from 'react'
import './App.css'
import TaskComponent from './TodoComponent'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      
      <h1>Vite + React + TypeScript</h1>
      <h2>Counter : {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          decrement
        </button>
        <button onClick={() => setCount(0)}>
          reset
        </button>
      </div>
      <div>
        <TaskComponent/>
      </div>
    </>
  )
}

export default App
