import { useSelector, useDispatch } from "react-redux";
import { getTasks, setTodos } from "../features/todos/todoSlice";

function TaskList() {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    });

    dispatch(setTodos(updatedTasks));
  };

  return (
    <section>
      {tasks.map((taskObj) => (
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
