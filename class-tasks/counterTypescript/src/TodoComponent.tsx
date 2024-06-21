import { useState } from "react";
import { TodoList } from "./TodoList";

// Define the type for a single task
type Task = {
  id: number;
  title: string;
  description: string;
};

const TaskComponent = () => {
  // Define the initial state with an array of tasks
  const [tasks] = useState<Task[]>([
    { id: 1, title: "Task 1", description: "Description of Task 1" },
    { id: 2, title: "Task 2", description: "Description of Task 2" },
    { id: 3, title: "Task 3", description: "Description of Task 3" },
  ]);

  return (
    <div>
      <h1>Tasks List</h1>
      {/* <ul> */}
        {/* Map through the tasks array and render each task
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))} */}
      {/* </ul> */}
      <TodoList tasks={tasks} />
    </div>
  );
};

export default TaskComponent;
