import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //Entre llaves por que no es un export default

console.log(data);

export const TaskContext = createContext(); //El nombre ddel contexto

export function TaskContextProvider(props) {
  {
    /* El contexto también recibe el nombre de Provider (?)*/
  }
  const [tasks, setTasks] = useState([]);

  function createTask(newTask) {
    //El componente principal es el que DEBE tener la función de creación, debido al enfoque de react//Hasta que se creó el componente contexto, el componente App fue el dueño del estado...
    //El componente contexto se presta para que los demás componentes puedan acceder al estado
    setTasks([
      ...tasks,
      {
        title: newTask.title,
        id: tasks.length,
        description: newTask.description,
      },
    ]); //...copia el arreglo tasks y le agrega el elemento task, no se altera el arreglo original, finalmente se lo asigna a setTasks. Recordar que la longitud es el último índice + 1...
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks: tasks, //con solo poner uno u otro a lado o lado de los dos puntos sería suficiente
        deleteTask: deleteTask, //Como parámetro le paso la función de creación
        createTask: createTask, //Como parámetro le paso la función de creación
      }}
    >
      {props.children}
    </TaskContext.Provider>
    /*<><h1>Componente Context</h1>{props.children}Manera de colocar adentro componentes hijos</>*/
  );
}
