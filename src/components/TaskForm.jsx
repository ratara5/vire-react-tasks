import { useState, useContext } from "react"; //añadido algo después de agregar un contexto
import {TaskContext} from '../context/TaskContext' //añadido después de agregar un contexto

function TaskForm() { //Antes de establecer el contexto, se le pasaba {createTask}
  const [title, setTitle] = useState("");
  //const title=""
  const [description, setDescription] = useState("");
  
  //const value=useContext(TaskContext)
  //console.log(value)
  const {createTask}=useContext(TaskContext)

  //const valor=useContext(TaskContext) //No es necesario acá
  //console.log(valor) //No es necesario acá

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(title+", "+description)
    const newTask={ //Esta variable const se usó, luego no, y luego sí
    title: title, //En lugar de poner todos los atributos del objeto aquí, me lo llevo de regreso a donde está el arreglo de objetos (tasks), para darle manejo al id mediante la longitud del arreglo
    description: description
    }
    console.log(title+", "+description)
    createTask(newTask) //ya no le paso un objeto tarea, sino un título
    setTitle(""); //Para limpiar el formulario
    setDescription(""); //Para limpiar el formulario
  };
  

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-900 p-10 mb-4" onSubmit={handleSubmitForm}>
        <h1 className="text-2xl font-bold text-white text-center mb-3">Crea tu tarea</h1>
        <input className="bg-slate-400 pd-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          value={title} //Para limpiar el formulario
          autoFocus //En la carga de la página, el cursor se sitúa automáticamente
        />
        <textarea className="bg-slate-400 pd-3 w-full mb-2"
          placeholder="Escribe la descripción de tu tarea"
          onChange={(e) => {
            setDescription(e.target.value); 
          }}
          value={description} //Para limpiar el formulario
        />
        <button className="bg-indigo-500 px-3 py-1 text-white w-full mb-2 rounded-md">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
