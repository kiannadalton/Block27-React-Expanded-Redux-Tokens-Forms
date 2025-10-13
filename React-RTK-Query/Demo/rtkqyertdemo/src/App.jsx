//styles
import "./App.css";
//components
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

function App() {
  


  return (
    <div>
      <h1>To Do List</h1>
      <AddTodo />
      <TaskList />
    </div>
  );
}

export default App;
