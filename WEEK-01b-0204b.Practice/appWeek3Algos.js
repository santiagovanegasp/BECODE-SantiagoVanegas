// exo 00  Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
/*function Ten (num1, num2,) {
    if ( num1 == 10 || num2== 10|| (num1 + num2) == 10 ) {
        return true;
    } else {
        return false;
    }
}*/

//console.log(Ten(9,9));

// exo 01 Create a function that takes the age in years and returns the age in days.
// const YearsToDays = (years) => years * 365 ;
// console.log(YearsToDays(60))

// exo 02  Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
/*
function sumNumbers(number) {
    let sum = 0; 

    for (let i = 1; i <= number; i++) {
        sum += i; 
    }

    return sum; 
}

console.log(sumNumbers(4)); */


 //Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//  myArray = [1,2,3,4]
// console.log(myArray[0])
//  function minMax (myArray){

//     return [myArray[0],myArray.length]; 

//  }

//  console.log(minMax([1,2,3,4,5]))
 
// 04. exo  A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

/*
let passWord = "YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"; 
let lettersArray = passWord.split("");

console.log(lettersArray);

function findPassword () {
    let finding = [];

    for (let i = 0; i < lettersArray.length; i++) {  // compare every letter
        if (lettersArray[i] === lettersArray[i].toLocaleLowerCase()) {
            finding.push(lettersArray[i]);  // add lowercase to array 
        }
    }
    return finding.join("");  
}

console.log(findPassword()); */ 


// // exo 05  // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
//   sortDrinkByPrice(drinks) ➞ [
//     {name: "water", price

/*
drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
  ]

drinks.sort((a, b) => a.price - b.price);

console.log(drinks)  */




/* : 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
] */    // expected 

//  exo 6   

/*
function animals (chickens, cows, pigs){

    return chickens*2 + cows*4 + pigs*4;

}


console.log(animals(5,2,8)) // >> 36 */

// ** exo 01. 07 

/*
function profitableGamble( probability, prize, pay ){

    if  (probability * prize > pay) {
        return true ;
    } else { return false ; }

}

console.log(profitableGamble(0.2, 50 , 9))


console.log(profitableGamble(0.9, 1, 2) )

console.log(profitableGamble(0.9, 3, 2))  */ 

// exo 01.08 
/*
function fps(minutes , frames) {
   return minutes * 60 * frames ;
}

console.log(fps(10,25))*/


// exo 01.09  fuel 
/*
function calculateFuel( distancia){
    let result = distancia*10 ;
    if (result < 100){
        return 100;
    }else { return result};

}

console.log(calculateFuel(15)) 

console.log(calculateFuel(23.5) )

console.log(calculateFuel(3) )*/

//   ALGOS SERIE 2  // 

//.00exo 

// Create a function which returns the number of true values there are in an array.

// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).
/*
function trueValues (myArray){

    const count = myArray.filter(value => value === true).length;
    console.log(count);
}



trueValues([false, false, false, true]);  */ 

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// 0.1 Exo 
/*
function possibleBonus (myPosition, friendPosition){
  if (friendPosition - myPosition <=6 && friendPosition - myPosition > 0 ){
    return true ; 
  } else  {return false ;}
  
}

const possibleBonux = (myPosition, friendPosition) => friendPosition - myPosition <=6 && friendPosition - myPosition > 0 ;



console.log(possibleBonux(3, 7))

console.log(possibleBonux(1, 9) )
console.log(possibleBonux(5, 3) ) */




