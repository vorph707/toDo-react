import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <main className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-neutral-300 p-10 mb-4">
        <h1 className="text-2xl text-bold mb-2">Añadir tarea</h1>
        <input
          className="bg-slate-200 p-3 w-full mb-4"
          placeholder="Ingrese..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <h1 className="text-2xl text-bold mb-2">Añadir descripción</h1>
        <textarea
          className="bg-slate-200 p-3 w-full mb-3"
          placeholder="Ingrese..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-blue-200 justify-items-center">Guardar</button>
      </form>
    </main>
  );
}

export default TaskForm;
