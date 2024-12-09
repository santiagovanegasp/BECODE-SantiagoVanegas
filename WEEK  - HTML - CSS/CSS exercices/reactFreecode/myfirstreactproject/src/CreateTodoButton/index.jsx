function CreateTodoButton(){
    return (
  <button className="CreateTodoButtons" onClick={(event) => {
    console.log('you click my button');
    console.log(event);
    console.log(event.target);
  }
  }>
    +
  </button>
    )
}


export {CreateTodoButton};