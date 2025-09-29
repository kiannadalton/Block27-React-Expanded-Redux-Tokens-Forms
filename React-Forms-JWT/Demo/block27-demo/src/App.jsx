import { useState, useEffect } from "react";
import "./App.css";
//import TaskList component
import TaskList from "./components/TaskList";
import AddToDo from "./components/AddToDo";

function App() {
  //  Set the tasks default state to an empty array
  const [tasks, setTasks] = useState();

  //Create a `useEffect` within `App.jsx` to fetch a list of todos
  useEffect(() => {
    //create a function called `getTasks` inside the useEffect
    async function getTasks() {
      //use `fetch` to get the todos from the API
      const res = await fetch("https://todo-api-ur6k.onrender.com/api/todos");
      //use `.json()` on the response to get the reading `json` version
      const json = await res.json();
      //Update the state variable `tasks` with the list of todos we receive from the API
      setTasks(json);
    }

    //Call the function `getTasks` in the useEffect after our definition
    getTasks();

    //Set a dependency array in our useEffect to only fetch the todos once
  }, []);

  return (
    <div>
      <h1>To Do List</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <AddToDo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
