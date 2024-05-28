import './App.css'
import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} removeTodo={removeTodo}/>
      </div>
  );
}

export default App;
