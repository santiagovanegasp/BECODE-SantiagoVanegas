// dom elements
const todoInput = document.querySelector('#todo-input');
const addTodoButton = document.querySelector('#add-todo-button');
const todoList = document.querySelector('#todo-list');
const body = document.querySelector('body');


addTodoButton.addEventListener('click', function() {
    // value from field  // value for input , text area etc , for html elements like p use textcontent
    const taskText = todoInput.value;

    // create a new div for every task 
    const newDiv= document.createElement('div');
    body.appendChild(newDiv);
    newDiv.classList.add('divtask')

    // create paragraph
    const newParagraph = document.createElement('p');

    // add the text to paragraph
    newParagraph.textContent = taskText;

    // add paragraph to div 
    newDiv.appendChild(newParagraph);

    // create btn
    const newBtnDelete = document.createElement('button');
     // create btn text
    newBtnDelete.textContent = 'delete';
     // add  btn
    newDiv.appendChild(newBtnDelete);

    //  clear field
    todoInput.value = '';

    newBtnDelete.addEventListener('click' , function () {

        newDiv.remove();
    })


});









