// 👉 STEP 9: Import useDispatch from react-redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
//actions from slice
import { setTodos } from "./features/todos/todoSlice";
//styles
import "./App.css";
//components
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

function App() {
  // 👉 STEP 10: Create a dispatch using useDispatch
  const dispatch = useDispatch();

  useEffect(() => {
    async function getTasks() {
      const res = await fetch("https://todo-api-ur6k.onrender.com/api/todos");
      const json = await res.json();
      // 👉 STEP 11: dispatch setTodos with the json response
      dispatch(setTodos(json))
    }

    getTasks();
  }, []);

/**
 * Action --> {type: '', payload: ''}
 * dispatch(setTodos(json)) is the same thing as the above, except the type comes from the toolkit, so we can only pass the payload
 * --> {type: SET_TODOS, payload: [{}]}
 */

  return (
    <div>
      <h1>To Do List</h1>
      <AddTodo />
      <TaskList />
    </div>
  );
}

export default App;
