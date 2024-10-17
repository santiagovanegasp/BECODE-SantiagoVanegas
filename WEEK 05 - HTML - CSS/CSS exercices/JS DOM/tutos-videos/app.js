
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