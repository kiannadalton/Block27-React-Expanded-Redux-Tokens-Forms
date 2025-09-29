import { useState } from "react";

// tasks and setTasks are props passed from App.jsx
export default function AddToDo({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // example of Form Validation. Returns error if empty string is submitted
      if (task === "") {
        setError("Please provide a task");
        return;
      }
      const response = await fetch(
        "https://todo-api-ur6k.onrender.com/api/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task }),
        }
      );

      const json = await response.json();
      //using the spread operator (...), we copy the original list and then add the task at the end similar to a .push
      setTasks([...tasks, json]);

      // reset the setTask inside the try
      setTask("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Add Todo</h2>
      {/* Displays error message to user if there's an error from the try/catch in handleSubmit */}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input
            value={task}
            // allows use to type into input
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
