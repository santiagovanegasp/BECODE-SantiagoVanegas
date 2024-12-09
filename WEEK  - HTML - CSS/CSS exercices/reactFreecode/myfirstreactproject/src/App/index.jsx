import React from 'react';
import '../general.css';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI'

// import { CreateTodoButton } from '../CreateTodoButton';
// import { TodoCounter } from '../TodoCounter';
// import { TodoItem } from '../TodoItem';
// import { TodoList } from '../TodoList';
// import { TodoSearch } from '../TodoSearch';
// import './general.css';




// renderizar arrays 

// const defaultTodos = [
//   { text: 'cooking' , completed: false},
//   { text: 'drink' , completed: false},
//   { text: 'workout' , completed: false},
//   { text: 'study' , completed: false},
//   { text: 'FINISH my react course' , completed: false},
// ] ;


// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos) );


/// hooks 




function App() {
  
  // const [todos,setTodos]= React.useState(defaultTodos);
  const [todos,saveTodos]= useLocalStorage('TODOS_V1', []);

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
