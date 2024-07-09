import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    console.log(todos);

  const handleChange = (e,id) =>{
    dispatch({type:"TOGGLE_TODO",payload:id})
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} display={{display:"flex",justifyContent:"center",gap:"30px"}}>
          <span>{todo.title} </span><span><input type='checkbox' checked={todo.completed} onChange={(e)=>handleChange(e,todo.id)}/></span>
          <button onClick={() => dispatch({type:"REMOVE_TODO",payload:todo.id})}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;