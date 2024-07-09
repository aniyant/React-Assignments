import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm } from './component/TodoForm'
import TodoList from './component/TodoList'

function App() {

  return (
    <>
      <TodoForm/>
      <TodoList/>
    </>
  )
}

export default App
