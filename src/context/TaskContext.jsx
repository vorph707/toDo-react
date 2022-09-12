import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  useEffect(() => {
    setTasks(data);
  }, []);

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        descripcion: task.description,
        id: tasks.length,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
