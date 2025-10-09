import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTodos } from "./features/todos/todoSlice";
//styles
import "./App.css";
//components
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTasks() {
      const res = await fetch("https://todo-api-ur6k.onrender.com/api/todos");
      const json = await res.json();
      dispatch(setTodos(json));
    }

    getTasks();
  }, []);

  return (
    <div>
      <h1>To Do List</h1>
      <AddTodo />
      <TaskList />
    </div>
  );
}

export default App;
