import React from 'react';
import '../general.css';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI'


// renderizar arrays 

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'cooking' , completed: false},
//   { text: 'drink' , completed: false},
//   { text: 'workout' , completed: false},
//   { text: 'study' , completed: false},
//   { text: 'FINISH my react course' , completed: false},
// ] ;


// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos) );


function App() {
  
  // const [todos,setTodos]= React.useState(defaultTodos);
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  }= useLocalStorage('TODOS_V1', []);

  const [searchValue,setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  } );

console.log('log 1')

// React.useEffect(() => {
//   console.log('log 2')
// })

// React.useEffect(() => {
//   console.log('loooooooog 2')
// },[])

React.useEffect(() => {
  console.log('loooooooog 2')
},[totalTodos])  // render on change 

console.log('log 3')


 


  const finishTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex= newTodos.findIndex( 
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true; 
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex= newTodos.findIndex( 
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    finishTodo={finishTodo}
    deleteTodo={deleteTodo}
    />
  )
} ; 

export default App;

function TodoMessage () {
  const [state,setState] = React.useState({});

  React.useEffect(() => {
    const data = api ();
    setState(data);
  }, []);

  return (
    <p>
      {state.TodoMessage
      || 'mi mensaje'}

    </p>
  )
}