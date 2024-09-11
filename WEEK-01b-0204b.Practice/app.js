/* var a = "3";
var b = "8";

/***********Do not change the code above 👆*******/
//Write your code here :
/*
let  swtich = a ;
a = b ; 
b = swtich;


/***********Do not change the code below 👇*******/
/*
console.log("a is " + a);
console.log("b is " + b);

/*The variable a shoudl hold the value "8".

And the variable b should hold the value "3".

When the code is run, it should output:

a is 8

b is 3

Copy the bellow code into your javascript file and tun it in the browser.*/

//const { prompt } = require("readline-sync");


// ---------------   task from video 
/*
let x= "I am watching Dev Dreamer";

console.log (x.toUpperCase());
console.log (x.toLowerCase());
console.log(x.slice(13));  // can be 13 or 14 or 14,25
*/

/// exercice 06bPractice 
/*
Without altering the original value stored in message, please define a variable called whisper that is a lowercased version of message, with all the extra space at the beginning and end removed. You will need to use two string methods that we just covered.

Bonus: Make it in one line !  */

// DON'T TOUCH THIS LINE!
/*const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:

let whisper = message.trim().toLowerCase();
console.log(whisper);

let string = 'Dumbledore';

console.log(string.slice(-1));

// DON'T TOUCH THIS LINE! (please)
const word = "skateboard"; //Don't change this line!

/*I've provided you with a word variable, set to "skateboard". Your goal is to use string methods on word, so that you end up with the string beard.

Use a string method to extract the "board" part of "skateboard" (using the slice method)

Replace the "o" in board with an "e" (using the replace method)

Save the result in a variable called facialHair and then log it in the console.*/

// YOUR CODE BELOW THIS LINE:
/*
let facialHair = word.slice(5).replace("o","e");
console.log(facialHair)

console.log(Math.round(Math.random()*10)); //random integer between 0 and 10

console.log((Math.random()*5)); //random float between 1 and 5


let numx = 3.6456448;
console.log(typeof numx);


const PI = 3.141596254;
let num = PI.toFixed(4);
num = PI.toPrecision(5);
let mill = 1000000;
num = mill.toExponential(); 
console.log(num);



/* 08 practice  Practice : Variables, Strings and Numbers */

/*
const city = "Brussels";

let weatherCondition = "rainy";

let temperature = 24.16879;

const weatherText = `The weather in ${city} is ${weatherCondition} and it's ${parseInt(
  temperature
)}°C outside`;

console.log(weatherText); // Prints : The weather in Brussels is rainy and it's 24°C outside.

const name = prompt("What is your name?");
const age = prompt("how old are you?");
const adresse = prompt("where do you live?");


alert(`Welcome ${name}!, you are ${age} and you live in ${adresse}` );

*/
// exercise VAT 
/*
let price = prompt('how much it cost ?');
price *=1.21; 
price.toFixed(2);
//let priceVAT = price*1.21;
console.log(price);
alert(`the price with VAT is ${price}`)
*/
// exercise Surface of a circle 
/* 
let radius = prompt('what is the radius of your circle ?');
radius= parseFloat(radius).toFixed(2);
let surface = 3.14 * radius ;
alert(`your circle surface is ${surface.toFixed(2)}`);
*/

/*Make a Calculator! 
let number1= parseFloat(prompt('write a number'))
let number2 = parseFloat(prompt('write a second number'));
alert(`The SUM of your numbers is ${number1+number2}`);
*/
/*
// QUESTION 1
console.log(!0 && true); // true

// QUESTION 2
const a = null;
const b = undefined;
const c = 4;

console.log((!a && b) || c); //true 

// QUESTION 3

console.log(a == b && c); // true 

// QUESTION 4

console.log(typeof !b && "Hello" && c); // true 

*/

// let age = 18;
// let age2= 16;  

// if (age >= 18){
//     console.log("you can vote")
// } else {
//     console.log("Sorry , you can't vote")
// }

// // ternary operator
// age2 >= 18 ? console.log("you can vote") : console.log("Sorry , you can't vote")

 /*11b Exercise : Conditionals

let UserName = prompt("Write your name ");
let FavoritePet = prompt(" which do you prefer, cats or dogs ? ") ;

if (FavoritePet === "cats") {
    alert(`Hello ${UserName} , i love cats too`)
} else if (FavoritePet === "dogs"){
    alert(`Hello ${UserName} , i love dogs too`)
} else {
    alert(`Hello ${UserName} ,  we only love dogs and cats , sorry!`)
}
    */

// const mystery = "Panama7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// // LEAVE THIS CODE ALONE! (pretty please)
// if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
//   console.log("YOU GOT IT!!!");
// } else {
//   console.log("TRY AGAIN");
// }

/*Make a keyless car!


let ageUser = parseInt(prompt('write your age')); 

if (ageUser < 18 ){
    console.log("Sorry, you are too young to drive this car. Powering off");
    } else if (ageUser == 18 ) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!");
    } else {
    console.log("Powering On. Enjoy the ride!");
} */


// What fruit?

// Ask the user what is his favorite fruit.
// If it's bananas, tell him you like bananas as well.
// If it's strawberry, tell him you LOVE strawberries.
// If it's grape, aks him if he prefers purple or green grapes.
// If it's purple, tell him you don't like purple grapes.
// If it's green, tell him green grapes are ok...
// If it's not purple or green, tell him you don't understand.
// If it's another thing, tell him you don't understand the word he said (displaying the word he said).
// Think like a programmer !

// DRY !!!!! (Don't Repeat Yourself).
// What if the person puts Bananas instead of bananas ?
// Try to think the more efficient way to get to your goal.


// let favoriteFruit = prompt("Write your favorite fruit").toLowerCase();

// switch (favoriteFruit) {
//     case "bananas" : alert("I like bananas as well") ;
//     break;
//     case "strawberry" : alert("I  LOVE strawberries");
//     break;
//     case "grape" :  
//         let grapeFavorite = prompt("do you prefer purple/green grapes?").toLocaleLowerCase();
//         if (grapeFavorite =="purple"){
//             alert("I don't like purple grapes.")
//         } else if (grapeFavorite =="green"){
//             alert("Green apples are ok")
//         } else {
//             alert("I don't understand")
//         }
//     break;
//     default : alert(`I don't understand the word you said ${favoriteFruit}`)


// }  


// arrays !! 
/*
let countries = ["spain", "belgium" , "netherlands",["colombia","argentina","peru"]];

console.log(countries[3][0]);

delete countries[3][1];
console.log(countries[3][1]);

countries[3][0] = "colombia 3" ;
countries [3][1]= "argentina 1" ;

console.log("el partido queda " + countries[3][0] + " "+ countries[3][1]);    */ 

/*
let fruits = ["apple", "orange" , "banana"] ;

fruits.splice(0 , 0 , "cherry" , "pineapple"); // coulde be .unshift()

fruits.push("plum","grapes");
fruits.sort();
console.log(fruits);  */ 



/* //  12b.exercises Array access practice

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

// YOUR CODE BELOW HERE:

leaderboard.splice(1, 1, "Luna");
leaderboard.splice(3, 1, "Draco");

console.log(leaderboard)
*/



/*//   Selection of elements Create an array that should look like suche : ["one","two","three"]
const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
  ];

  console.log(initialArray);



initialArray.splice(0,2);

console.log(initialArray);

initialArray[0].shift();
initialArray[0].pop();
initialArray.splice(1,1);
initialArray[1].pop();
initialArray.splice(2,2);
let finalArray = initialArray.join();

//initialArray[0].splice(0,1);
// console.log(initialArray);
// initialArray[0].shift();
console.log(finalArray);  */ 




/*//Push/Pop/Shift/Unshift Practice



const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

/*emove the first element, The Moon, from the planets array. The moon is not a planet!

Add in Saturn at the very end of the planets array

Add Mercury as the first element in the planets array.

At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log(planets);  */


// !  Objects 

/* It's time to practice creating your own object literal. Please define a new variable called product. It should be an object literal with the following properties:

name - set to the string "iPhone 15"

inStock - set to the boolean true

price - set to the number 1249.90

includedInPackage - set to an array of at least three strings like ["case", "earphones", "charger"]

Now, log to the console the second item included in the package that this iPhone product comes with. */ 

/*
const product = {
    name : "iphone15" ,
    inStock : true ,
    price : 1249.00 ,
    includedInPackage: ["case", "earphones", "charger"]

};

console.log(product.includedInPackage[1] + "*");
*/

/* Object Access Exercise

Your task to is to create a variable named fullAddress that points to a string using the information from restaurant.

fullAddress should point to a string that includes the address, city, state, and zipcode from the restaurant object. Make sure to add any necessary commas or spaces between the values as seen in the exact expected output format shown below.

To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.

For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
"64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output format of the fullAddress string (keep an eye on the commas and/or spaces between the values and match that too!)

Finally, log to the console the value of fullAdress  */ 

//PLEASE DON'T TOUCH THIS LINE!
/*const restaurant = {
    name: "Ichiran Ramen",
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: "Brooklyn",
    state: "NY",
    zipcode: "11206",
  };
  
  //YOUR CODE GOES DOWN HERE:

  console.log(restaurant.address+",",restaurant.city +",",restaurant.state +",", restaurant.zipcode );  */



 /* Even numbers
Let's try another thing... Write a code that will log to the console only the even numbers untill 20.

The goal here is to see that the increment expression doesn't have to be necessarely i++

Attention : the 0 should no be counted.

The result in your console should be :

2 4 6 8 10 12 14 16 18 20 

Now, do the same thing for odd numbers untille 20.

The result in your console should be :

1 3 5 7 9 11 13 15 17 19  */ 

/*
// odd numbers 
for ( let i = 1 ; i <=20 ; i+=2)  {
    console.log(i)
}

// even numbers

for ( let i = 2 ; i <=20 ; i+=2)  {
    console.log(i)
} */

    /* Decrement
Let's inverse a little bit the logic.

Let's print all the multiple of 10 from 100 to 1;

The result in your console should be :

100 90 80 70 60 50 40 30 20 10

And now do another one that should print :

25 20 15 10 5 0

Another one
Let's do something else... How could I have this result on my console :

10 100 1000 */ 
/*
for ( let i = 100 ; i >=10 ; i-=10)  {
    console.log(i)
}


for ( let i = 25 ; i >=0; i-=5)  {
    console.log(i)
}

for ( let i = 10 ; i <=1000; i*=10)  {
    console.log(i)
}  */ 



///


// 16 for loops

// const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];

// //console.log(animals)
// for ( let i= 5 ; i >= 0 ; i-- ){
//     console.log(animals[i])
// }

/*

const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
  ];

  for ( let i=0 ; i < users.length ; i++){

    console.log("My full name is " + users[i].firstName +" " + users[i].lastName )
  }

  */


  // 16 for loops

  /*const seatingChart = [
    ["Colas", "Benoit", "Elodie"], // row1
    ["Sola", "Irina", "Antonino", "Eli"], // row2 
    ["John", "Maryna", "Naike", "Fabrice"], // row3
  ];
  
  // I can use nested loops to do that :
  
  for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    console.log(`ROW # ${i+1}`)
    for (let j = 0; j < row.length; j++) {
        
        console.log(row[j]);
    }
  }  */

  // as an exercise, try to log the number of the row before the list of students.
    


// 18.exercise  Javascript Loop Exercise

/*Ok, let's write a little stupid game. :) Read all the instructions before starting to code.

The machine should ask the user to enter a "max number".
Get sure the max number is indeed a number. Otherwise it should ask again tha max number.
The machine should then choose a random number between 1 and the max number.
Then, the machine will ask the user to guess the number
If we enter something that is not a number, the machine should alert it's not a valid answer and ask again for a number.
If it's not correct, the machine should tell it's not correct and if the guess should be higher or lower.
The loop ends only when the user finds the number and then the machine says "Congratulation!" and how many attemps the user made before it guessed right.
Little tip :

The prompt function always return a string. Even if you put a number. Make sure you compare numbers to numbers ;)
We can not use a comparator with NaN. There is a function to check if it's NaN : isNaN(). But remember : NaN is falsy, so there are better ways.*/


/*
let maxNumber ;
do {
    maxNumber= parseInt(prompt("Write a max number"));
    if (isNaN(maxNumber)){
      alert("it's not a valid answer");
    }
    
} while (isNaN(maxNumber));

let randonNumber = parseInt(Math.random()* maxNumber+1) ;
//console.log(maxNumber); 
//console.log(randonNumber +"random number");


let guessNumber ;
let count=1;
do {
  guessNumber = parseInt(prompt("Guess the number i chossed"));
  if (isNaN(guessNumber)){
    alert("it's not a valid answer");
  }
  
  if (guessNumber > randonNumber ){
    alert(" try again with a lower number")
    count++
  } 
  if (guessNumber < randonNumber ){
    alert(" try again with a higher number")
    count++
  }

  if (guessNumber === randonNumber ) {
    alert(`Congratulations! you got the secret number you have done ${count} attemps `)
  } 
  
} while (isNaN(guessNumber) || guessNumber != randonNumber);

console.log(`guess number ${guessNumber} vs randonNumber ${randonNumber}`)   */ 



// Exercise 20    - ToDo List

/* List commands 
new to add a todo
list to see all the todos
delete to remove a specific todo
quit to exit de program */ 

//let todoList= ["java", "phyton", "react"]

/*
let todoList= []

while (true) {

let command = prompt("write a command *NEW* to add a todo , *LIST* to see all the todos , *DELETE* to remove a specific todo, *QUIT* to exit") ;
 command= command.toLocaleLowerCase();
 
if ( command === "new"){
  todo = prompt("write your todo")
  todoList.push(todo) 
  
 } else if (command === "list") {
  //console.log(`${todoList.indexOf(todo)+1} .${todoList}`)
   for ( let listN of todoList ){
   console.log(`${todoList.indexOf(listN)+1} .${listN}`)
   
   }
 } else if (command == "delete"){
  let elementDelete= prompt("write the element number that you want to delete")
  //let index = todoList.indexOf(elementDelete) 
  todoList.splice(elementDelete , 1 );
  console.log(todoList)

 }
else if (command === "quit"){
  break;
 } 

}*/

// exercises functions

// function favFood (response) {
//   if (response === undefined){
//     console.log("please write your favorite food")
//   }else {
//     console.log(`Your favorite food is ${response}`)
//   }
  
// }

// favFood();


// function favNum(num){
//   return num;
// }

// let myFavNum = favNum(8);
// console.log(`My fav num is ${myFavNum}`)


// 21b.Exercises  dies



// Write a function that takes two parameters faces and times
// Inside of it, log to the console times times a die with faces faces.
// Console log : die 1 : result, die 2 : result for each die.
// Expected result for, for example, (6, 5) (the numbers should be random of course)

 /*
function die (faces, times){

  let arrayDieNumbers =[];
  for ( let i = 0 ;i <times ; i++ ){
    dieNumber =  Math.floor(Math.random() * faces + 1)
    arrayDieNumbers.push(dieNumber)  // to save the number
    
  }
  
  for ( let i =0 ; i < times ; i++){
    console.log(`die ${i+1}: ${arrayDieNumbers[i]}`)
  } 
   
}

die(13,25)  */ 



// Let's write a function that takes as parameter a string and the amount of times we want to repeat it. Then, log to the console the result.

// Example:
// repeat("$", 5);
// // expected result : "$$$$$"

/*
function repeat (string , times ) {

  let text = "";

    for (let i = 0 ; i < times ; i++ ){

      text += string;
     
    }
  
    console.log(text)  
}

repeat("5" , 5 )  */
/*
function sum (num1,num2){
  return parseInt(num1) + parseInt(num2) ;

}

const result = sum(3,"6");
console.log(result)
console.log(typeof(result));  */


// function logs() {
//   console.log("Hello");
//   console.log("World");
//   return 4;
//   console.log("Goodbye");
//   console.log("World");
// }

// const myVariable = logs();

// console.log(myVariable);

/*
function isShortWeather (temperature){

  if ( temperature >= 24 ) {
    return true ; 
  } else {
    return false; 
  }
} 

console.log (isShortWeather(20));  */


// last element array 
/*
function lastElement (MyArray){

  return MyArray[MyArray.length - 1];
}

console.log(lastElement([3,5,6,7])); */

/*
function capitalize (str){
  // let firstLetter = str.charAt(0)  ;//returns f 
  // let otherLetters = str.substring(1) 
  // let cap = firstLetter.toUpperCase();
  
  let shortCap = str.charAt(0).toUpperCase()+ str.substring(1)
  //return console.log(`${cap}${otherLetters}`);
  return console.log(`${shortCap}`)
}

capitalize("mirapashabobo")  */ 


/*
function sumArray (myArray){
  let sum = 0 ; 
  for ( let i = 0 ; i < myArray.length ; i++){
    sum += myArray[i]; 

  }
  console.log(sum);
}

sumArray([10,25,56,89,90]);

*/
/*
function returnDay (dayOfweek){

  const myObject = {
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
    7: "sunday",
  };

  if ( dayOfweek > 0 && dayOfweek < 8 ){

    return myObject[dayOfweek];
  } else {
    return null;
  }

}
console.log (returnDay(2)); */



// Here, the callTwice function takes another function as a parameter and call it n times


const rollDie = function () {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
};

function callTwice(func, times) {
  for (let i = 0; i < times; i++) {
    func();  
  }
}


callTwice(rollDie, 5);  
