import { useState } from "react";
import { useAddTodoMutation } from "../api/todoApi";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);
  const [AddTodo] = useAddTodoMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // the body we're sending is destructured so we can control exactly what information is being sent.
    try {
       addTodo({
         task: todo,
         completed: false,
       });
    } catch (err) {
      setError(err);
    }
   

    //reset form
    setTodo("");
  };

  return (
    <section>
      <h2>Add a ToDo</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          To Do:
          <input
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default AddTodo;
