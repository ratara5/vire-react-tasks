//import React from 'react' al ejecutar snippet rfce

import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";
//import { useState, useEffect } from "react"; //Esto ya no se necesita, al pasar todo al contexto



function App() {
  //Se pasan de acá hacia context el state asociado a las tareas
  //const task=[]

  //Se pasa de acá hacia context el effects asociado a las tareas



  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
      <TaskForm/> {/*Como parámetro le pasaba la función de creación. Después de establecer el componente contexto, no*/}
      <TasksList/> {/*Como parámetro le pasaba la función de borrado. Después de establecer el componente contexto, no*/}
      </div>
    </main>
  );
}

export default App;
