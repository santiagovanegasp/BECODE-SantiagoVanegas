// mover la clase en el html 1 elemento child 


// const bg= document.querySelectorAll('.highlight');


const myList = document.querySelectorAll("li") ;  // returns a kind of array 


myList.forEach(element => {
    element.classList.toggle("highlight")
}); 


