function TaskList({ tasks, setTasks }) {
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

    setTasks(updatedTasks);
  };

  if (!tasks) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <section>
      {/* add a check in our TaskList component to only map if tasks is defined */}
      {tasks &&
        tasks.map((taskObj) => (
          <div
            onClick={() => completeTask(taskObj.id)}
            className={taskObj.completed ? "complete" : ""}
            key={taskObj.id}
          >
            {taskObj.task}
          </div>
        ))}
    </section>
  );
}

export default TaskList;
