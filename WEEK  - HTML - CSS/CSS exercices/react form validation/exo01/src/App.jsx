import React, { useRef } from 'react';
import "./App.css";
import { ValidatedInput } from "./components/ValidateInput";
import { Age } from "./components/Age";

const App = () => {
  // Creamos un array para almacenar referencias a los métodos de validación
  const validationRefs = useRef([]);

  // Función que se ejecuta cuando se presiona el botón de "Send"
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ejecutamos todas las funciones de validación almacenadas
    const allValid = validationRefs.current.every((validate) => validate());

    if (allValid) {
      console.log('✅ All fields are valid. Form submitted successfully!');
    } else {
      console.log('❌ There are errors in the form.');
    }
  };

  return (
    <div>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <ValidatedInput 
          label="First Name" 
          placeholder="Enter your first name"
          registerValidation={(validate) => validationRefs.current.push(validate)}
        />
        <ValidatedInput 
          label="Last Name" 
          placeholder="Enter your last name"
          registerValidation={(validate) => validationRefs.current.push(validate)}
        />
        <Age 
          label="Age" 
          placeholder="Enter your age"
          registerValidation={(validate) => validationRefs.current.push(validate)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default App;




/*
// import { useState } from 'react'
import "./App.css";
import React from 'react';
import { ValidatedInput } from "./components/ValidateInput";
import { Age } from "./components/Age";
// For this first exercise, we will do a form validation.

// The form will have the following fields :

// first name * 
// last name
// age
// email
// phone number
// password
// repeat password
// The goal is :

// No error message is displayed at start.

// When we submit the form, it evaluates the inputs and gives error messages (red outline of the input and red text saying the requirements for the field) or success (green outline)


// For the errors, you will have to correct it, and while you're correcting, the error or success feedback is given in real time. (it changes automatically when you're typing)
   //cambia a onchange 

// After everything is validated and you submit it, you should display all the information entered in a list (ul) after the form itself.




//validaciones al enviar el submit 




const App = () => {
  return (
    <div>
      <h1>Form Validation Example</h1>
      <ValidatedInput 
      label="First Name" 
      placeholder="Enter your first name" />
      <ValidatedInput 
      label="Last Name" 
      placeholder="Enter your last name" />
      <Age 
      label="Age" 
      placeholder="Enter your Age" />
      <button type="submit">Send</button>
    </div>
  );
};

export default App;


*/


































/*  little exercises  ________________________________________________________________________________

// Mostrar la Hora Actual
// Objetivo: Crear un componente que muestre la hora actual y se actualice cada segundo.

function App() {
  // Estado para almacenar la hora actual
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect para manejar el intervalo cuando el componente se monta
  useEffect(() => {
    // Crear el intervalo que actualiza la hora cada segundo
    const intervalID = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalID);
  }, []); // array vacio , 1 vez para el efecto 

  return (
    <div>
      <h2>Hora Actual</h2>
      <p>{time}</p>
    </div>
  );
}

export default App;


*/  


/*

// Cambio de Color de Fondo
// Objetivo: Cambiar el color de fondo de la página al hacer clic en un botón.
function App(){

  const [color, setColor] = React.useState('white');

  function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  }
  
  const changeColor= ()=>{
    const newColor = randomColor();
    setColor(newColor)
    document.body.style.backgroundColor = newColor
  } 

  return (
    <div>
      <button onClick={changeColor}> the actual color is {color}</button>
    </div>
  )

}

export default App;

*/



// Lista de Tareas
// Objetivo: Crear una lista de tareas que se renderice dinámicamente.

// Instrucciones:

// Crea un componente TodoList que contenga una lista de tareas como un arreglo de cadenas de texto (por ejemplo, ["Tarea 1", "Tarea 2"]).
// Muestra cada tarea como un ítem de una lista (<ul> con <li>).
// Utiliza el método map() para renderizar cada tarea de manera dinámica.
// Pistas:

// Usa un arreglo de tareas en el estado.
// No es necesario agregar interacciones en este ejercicio, solo muestra las tareas.



// function App() {
//   const myTodos = [
//     "understanding react",
//     "building my portfolio",
//     "get a job in IT",
//     "whatsapppppppp"
//   ];

//   return (
//     <div>
//       <ul>
//         {/* Aquí directamente mapeamos los todos */}
//         {myTodos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


// using props 
/*
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

// Componente App, el cual pasa el arreglo de tareas como props
function App() {
  const myTodos = [
    "understanding react",
    "building my portfolio",
    "get a job in IT",
    "whatsapppppppp"
  ];

  return (
    <div>
      <h3>Mi Lista de Tareas</h3>
      
      <TodoList todos={myTodos} />
    </div>
  );
}

export default App;

*/



/*
// Mostrar un Mensaje al Hacer Clic
// Objetivo: Crear un componente que muestre un mensaje diferente cada vez que se hace clic en un botón.

function App() {
  const [message, setMessage] = React.useState("hello world");

  const arrayMessages = [
    "hello",
    "how are you ? ",
    "what we gonna do tomorrow?",
    'whatsapppppppp'
  ];

  let randomMessage = () => {
    let randomNum = Math.floor(Math.random() * arrayMessages.length);

    setMessage(arrayMessages[randomNum]);
  };

  return (
    <div>
      <button onClick={randomMessage}> tellme something </button>
      <p>{message}</p>
    </div>
  );
}

export default App;

*/

///________________________________________________////

/*
// 1. Contador Básico
// Objetivo: Crear un contador que aumente y disminuya el valor al hacer clic en los botones.

// Instrucciones:

// Crea un componente Counter con un estado count que empiece en 0.
// Agrega dos botones: uno para incrementar el contador y otro para disminuirlo.
// Al hacer clic en el botón "Incrementar", el valor de count debe aumentar en 1.
// Al hacer clic en el botón "Disminuir", el valor de count debe disminuir en 1.
// Pistas:

// Usa useState para manejar el estado del contador.



// retonar 2 botones html 


function MyCounter  () {


  // [estadoinicial,funcion que actualiza] 
  // [0,function]
  const [count , setCount] = React.useState(0);


  let suma = ()=> {
    setCount(count+1) 
  }

  let resta = ()=> {
    setCount(count-1) 
  }


  return (

    <div>
  
      <button onClick={suma}> increasse </button>
      <button onClick={resta}> decrease </button>
      <p>{count}</p>

  
    </div>
  
  
  )
}

export default MyCounter;

*/

/*
function MyForm() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(''); // Limpiar el error al modificar el input
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('Este campo es obligatorio');
    } else {
      console.log('Formulario enviado con:', inputValue);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Campo de validación:</label>
        <input
          id="input"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default MyForm;
*/
