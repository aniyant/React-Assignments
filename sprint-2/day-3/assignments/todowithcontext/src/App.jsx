import './App.css'
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodoProvider } from './TodoProvider';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
