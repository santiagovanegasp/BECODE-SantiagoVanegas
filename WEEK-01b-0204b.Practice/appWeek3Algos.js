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


// 02. exo Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

/*
function countNumbers (num){
  let convert = num.toString().split("");

  return convert.length ;
}

console.log(countNumbers(12)) */

//  03 . exo convert an object into an array 

/*
  const toArray =   (userArray) =>  Object.entries(userArray);   // object.entries return an array of arrays take key and value 
  console.log(toArray({ shrimp: 15, tots: 12 }));*/

//   toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []


// 04. exo // Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length. 



/*
function arrayOfMultiples(num, Maxlength){
    let resultArray = [] ; /// [...]
    for ( let i = 1 ; i <=  Maxlength ; i++) {
         resultArray.push(num * i);
    }
    return resultArray;
    }   
consol
}e.log(arrayOfMultiples(12,10)) */ 



// console.log(prueba)


////

// test = "000000046546456000154554455"
// console.log(test.indexOf("."))


// 05 exo Exercise removeLeadingTrailing zeros

// let  test = "00030402.0603445506690000"; 
// test = parseFloat(prueba)



/*
console.log(removeLeadingTrailing("003.1400"));


function removeLeadingTrailing(UserNum){
        let nonDec = UserNum.indexOf(".");
        console.log(nonDec)
        let resultNum;
    if (nonDec == -1){
        startI = 0;
        resultNum = 0; // ***
        while ( startI < UserNum.length && UserNum[startI]=== '0'){
            startI++;
        } if (startI === UserNum.length){
            resultNum = '0';
        } else{
            resultNum = UserNum.substring(startI);
        }  

    } else {
    
    let UserNumParts = UserNum.split(".")
    console.log(UserNumParts)
    group1 = UserNumParts[0];
    group2 = UserNumParts[1];
    let startIndex = 0;
    

    while (startIndex < group1.length && group1[startIndex] === '0') {
        startIndex++;
    } 

    let firstNum = 0;  /// **** 

    if (startIndex === group1.length) {
        firstNum = '0';
    } else {
        firstNum = group1.substring(startIndex);
    } console.log(firstNum) // ok
    //// second group while rigth to left

    let endIndex = group2.length -1;

    while (endIndex >= 0 && group2[endIndex] === '0') {
    endIndex--;
    } console.log(endIndex);
    let secondNum;
    if (endIndex < 0) {
        secondNum = ''; // if only zeros , replace by ""
    } else {
        secondNum = group2.substring(0, endIndex + 1); // decimal number without zeros
    }

    // only integer number
    if (secondNum === '') {
        resultNum = firstNum;
    } else {
        resultNum = `${firstNum}.${secondNum}`;
    }
}

//console.log(resultNum); test 
return resultNum; 
}
*/



/*
sortIt([4, 1, 3]) ➞ [1, 3, 4]

sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

sortIt([4, [1], 3]) ➞ [[1], 3, 4]

sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]  */ 
    


// let organize = [[3], 4, [2], [5], 1, 6];


// for ( let i =0 ; i < organize.length ; i++){

//     let result = [];

//    if (organize[i] <  organize[i++] )  {
//     organize[i].push(result);
//     console.log(result);
//    }
// }


let organize = [[3], 4, [2], [5], 1, 6, 8];



let numericList= []; 
for ( let i =0 ; i < organize.length ; i++){
    
    numericList.push(Number(organize[i].toString()))
}
console.log(numericList)

   
let changes ; 
    do {

        changes= false; 

        for ( let i =0 ; i < numericList.length -1   ; i++){

            let a = numericList[i];
            let b = numericList[i+1];
           if ( a > b) {    
              numericList [i] = b ;
              numericList [i+1] = a;  
              changes = true ; 
           } 
        
         } 

    } while (changes)


   
console.log(numericList)

/// first step 
 
