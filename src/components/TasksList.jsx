import TaskCard from "./TaskCard";
import {useContext} from 'react';
import {TaskContext} from '../context/TaskContext'

//import { useState, useEffect } from "react"; //Se necesitaba antes de que se moviera tasklist al componente principal, el cual es App



function TasksList() { //o, desestructurado, directamente {tasks}//Ya no te están pasando props

  //useState y useEffects estaban por aquí antes. LAs reemplaza el contexto

  //const value=useContext(TaskContext)
  //const {tasks, deleteTask}=useContext(TaskContext) //Pero el componente taskCard puede ingresar directamente a deleTask...Entonces
  const {tasks}=useContext(TaskContext)

  if (tasks.length === 0) { //No requerido props
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => ( //No requerido props
        <TaskCard key={task.id} task={task}/> //Antes contenía *deleteTask={props.deleteTask}. Pero, el componentes TaskCard puede acceder directamente a deleteTask
      ))}
    </div>
  );
}

export default TasksList;
