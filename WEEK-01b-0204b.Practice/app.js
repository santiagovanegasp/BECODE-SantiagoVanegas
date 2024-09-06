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


let favoriteFruit = prompt("Write your favorite fruit").toLowerCase();

switch (favoriteFruit) {
    case "bananas" : alert("I like bananas as well") ;
    break;
    case "strawberry" : alert("I  LOVE strawberries");
    break;
    case "grape" :  
        let grapeFavorite = prompt("do you prefer purple/green grapes?").toLocaleLowerCase();
        if (grapeFavorite =="purple"){
            alert("I don't like purple grapes.")
        } else if (grapeFavorite =="green"){
            alert("Green apples are ok")
        } else {
            alert("I don't understand")
        }
    break;
    default : alert(`I don't understand the word you said ${favoriteFruit}`)


}  





