import React from 'react';
import { Task as taskInterface } from './types';

interface TaskProps {
    task: taskInterface;
    toggleComplete: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleComplete }) => {
    return (
        <div className="task">
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleComplete(task.id)} 
            />
            <span>{task.description}</span>
            <span>Priority: {task.priority}</span>
        </div>
    );
};

export default Task;
