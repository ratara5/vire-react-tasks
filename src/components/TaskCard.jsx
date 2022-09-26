//Se crea después de haber garantizado el funcionamiento de App, TaskForm y TasksList
import React from "react";

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  //Este task no viene del contexto, viene del mapeo que se hace en el componente TaskList
  //props desetructurado en task
  const { deleteTask } = useContext(TaskContext);
  console.log(deleteTask);

  return (
    <>
      {/*<TaskContext> Manera de colocar dentro de un componente padre*/}
      <div className="bg-gray-800 text-white p-4 rounded-md">
        {/*Se quitó key={task.id}*/}
        <h1 className="text-xl font-bold capitalize">{task.title}</h1>
        <h4 className="text-gray-500 text-sm">{task.description}</h4>
        <button
          class="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar tarea
        </button>
      </div>
      {/*</TaskContext> Manera de colocar dentro de un componente padre*/}
    </>
  );
}

export default TaskCard;
