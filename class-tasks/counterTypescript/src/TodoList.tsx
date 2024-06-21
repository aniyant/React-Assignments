
type Task = {
    id: number;
    title: string;
    description: string;
  };
interface tasksProps {
    tasks: Task[];
}
export const TodoList = ({tasks}:tasksProps) => {
  return (
    <div>
        <ul>
        Map through the tasks array and render each task
        {tasks.map((task:Task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
