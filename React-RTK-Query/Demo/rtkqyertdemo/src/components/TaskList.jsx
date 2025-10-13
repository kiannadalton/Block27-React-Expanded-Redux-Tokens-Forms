import { useSelector, useDispatch } from "react-redux";
import { useGetTodosQuery, useUpdateTodoMutation } from "../api/todoApi";

function TaskList() {
  // can rename the destructured keys by doing something like { data: tasks, error, isLoading }. data would be called tasks
  const { data, error, isLoading } = useGetTodosQuery();
  // the endpoint name goes into the brackets for mutations
  const [updateTodo] = useUpdateTodoMutation();

  const completeTask = (taskId) => {
    const updatedTask = data.find((task) => task.id === taskId);
    updateTodo({
      //takes the completed and changes it to the opposite of whatever it currently is
      // need tags in api to help with rendering in real time (tagTypes, provideTags, invalidateTags)
      id: taskId,
      body: { completed: !updatedTask.completed },
    });
  };
  if (error) {
    console.log(error);
  }

  return (
    <section>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>Something went wrong! Please try again.</p>}
      {/* if data is true, we will map over it: */}
      {data &&
        data.map((taskObj) => (
          <div
            key={taskObj.id}
            onClick={() => completeTask(taskObj.id)}
            className={taskObj.completed ? "complete" : ""}
          >
            {taskObj.task}
          </div>
        ))}
    </section>
  );
}

export default TaskList;
