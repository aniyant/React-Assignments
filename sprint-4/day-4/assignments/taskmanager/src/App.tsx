import React, { useState } from 'react';
import { Task, Priority } from './types';
import TaskComponent from './Task';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [description, setDescription] = useState<string>('');
    const [priority, setPriority] = useState<Priority>(Priority.Low);

    const addTask = () => {
        const newTask: Task = {
            id: tasks.length + 1,
            description,
            priority,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        setDescription('');
    };

    const toggleComplete = (id: number) => {
        setTasks(
            tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className="App" style={{
          width: '500px',
          margin: 'auto',
          padding: '20px',
          display:'block',
        }}>
            <h1>Task Manager</h1>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <select 
                value={priority} 
                onChange={(e) => setPriority(e.target.value as Priority)}
            >
                <option value={Priority.Low}>Low</option>
                <option value={Priority.Medium}>Medium</option>
                <option value={Priority.High}>High</option>
            </select>
            <button onClick={addTask}>Add Task</button>
            <div>
                {tasks.map(task => (
                    <TaskComponent 
                        key={task.id} 
                        task={task} 
                        toggleComplete={toggleComplete} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
