import React, { createContext, useState } from 'react';

// Create the context
const TodoContext = createContext();

// Create a provider component
const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
