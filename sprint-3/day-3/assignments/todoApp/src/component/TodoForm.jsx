import React,{useState} from 'react'
import {useDispatch} from 'react-redux';


export const TodoForm = () => {
    const [todo,setTodo] = useState({
        title:'',
        completed:false,
        id:Date.now()
    });
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_TODO',payload:todo});
        setTodo({
            title:'',
            completed:false,
            id:Date.now()
        });
    }

  return (
    <div>
        <h1>Todo Form</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo.title} onChange={(e)=>setTodo({...todo,title:e.target.value})}/>
            <input type='checkbox' value={todo.completed} onChange={(e)=>setTodo({...todo,completed:e.target.checked})}/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}
