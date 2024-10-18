
/*

const firstEL= document.querySelector('li.list-item');
const firstELText= firstEL.innerText;


const newElmt = document.createElement("li");

// Set the inner text of this last li to be equal to the first li.

newElmt.innerText= firstELText; 
//Append the new li tag to the list.
const myList = document.querySelector("ul");
myList.appendChild(newElmt);

const allListItems = document.querySelectorAll('li');
allListItems.forEach((li) => {
  li.style.color = 'purple';
});


// Then, give the last li the color gold

const lastListItm = myList.lastElementChild;

lastListItm.style.color = 'gold';


// const hallItem = Array.from(allListItems).find(li => li.innerText.includes('Annie Hall'));

const annieHallItem = document.querySelector('ul li:nth-child(4)');

annieHallItem.innerHTML = annieHallItem.innerHTML.replace('Hall', '<span style="color: red;">Hall</span>');


console.log(" the next sibling is ", myList.nextSibling );  // node 

console.log(" the next element sibling is ", myList.nextElementSibling );

console.log(" the previous sibling is ", myList.previousSibling ); // node 

console.log(" the previous element sibling is ", myList.previousElementSibling );


myList.previousElementSibling.querySelector('p').innerHTML+= '<br> too cool for everyone else!'

*/

// ______ The event object______

/*
const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", (e) => {
  e.stopPropagation(); // only works for the first "element" of the event object
  alert("button was clicked");
});

p.addEventListener("click", () => {
  alert("paragraph was clicked");
});

*/




/*  bubbling_________ delegation ______ target 
// parent.addEventListener("click", (e) => {
//   console.log(e.target); // target to define the ... target from the parent 
// });



parent.addEventListener("click", (e) => {
  if (e.target.innerText === "One") {
    alert("You clicked the first button");
  }

  if (e.target.innerText === "Two") {
    alert("Elodie loves cats");
  }

  if (e.target.innerText === "Three") {
    alert("I am so happy !");
  }
  if (e.target.innerText === "delegation") {
    alert("you clicked the h1 ");
  }

  document.addEventListener("click", (e) => {
    if (e.target.matches(".my-class")) {
      alert("you clicked over one my-class element ");
      // Handle clicks on the elements with "my-class" class
    }
    if (e.target.matches("li")) {
      // Handle clicks on all li in the page
    }
    // etc
  });
});

*/

// Remove event listener_______________________ 




// const myFunc = () => {
//   console.log("clicked");
// };

// element.addEventListener("click", myFunc);

// needs to be a defined function 

// // Then you can later remove the event listener specifying that it should remove the "click" event to this specific function.

// element.removeEventListener("click", myFunc);

//Exercise : Score Keeper