import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter';
import { TodoItem } from '../TodoItem';
import { TodoList } from '../TodoList';
import { TodoSearch } from '../TodoSearch';



function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    finishTodo,
    deleteTodo,
}) {
    return (
        <div className='todo-container'>
          
            <TodoCounter 
            completed={completedTodos} 
            total={totalTodos}
            />
            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            <TodoList>
              {searchedTodos.map(todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                onCompleted={() => finishTodo(todo.text)}
                onDelete ={() => deleteTodo(todo.text)}
                />
              ))}
            </TodoList>
    
            <CreateTodoButton/>
        
        </div>
      )
};


export { AppUI };