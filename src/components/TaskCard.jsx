import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-6 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm px-2 py-2">{task.descripcion}</p>
      <button
        className="bg-blue-400 px-2 py-1 rounded-md hover:bg-blue-900"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
