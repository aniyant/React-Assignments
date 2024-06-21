import { useFetch } from "../hooks/useFetch";

const DataFetchingComponent = () => {
    const {
      data: todos,
      isError,
      isLoading,
    } = useFetch("https://jsonplaceholder.typicode.com/todos?userId=1&_limit=5");
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data.</div>;
    return (
      <div>
        <h1>Todo List</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Done" : "Pending"}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  export default DataFetchingComponent
  