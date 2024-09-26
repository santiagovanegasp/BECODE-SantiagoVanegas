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
  let convert = num.tostringing().split("");

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
            resultNum = UserNum.substringing(startI);
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
        firstNum = group1.substringing(startIndex);
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
        secondNum = group2.substringing(0, endIndex + 1); // decimal number without zeros
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



 
// serie 2 exo 06 Exercise. 

/*
function sortIt (userArray){

    userArray.sort((a, b) => a - b);
    return userArray;
}

console.log(sortIt([[3], 4, [2], [5], 1, 6])) */ 




// long way >> without methods
// let organize = [[3], 4, [2], [5], 1, 6];
// let numericList= []; 
// for ( let i =0 ; i < organize.length ; i++){
    
//     numericList.push(Number(organize[i].tostringing()))
// }
// console.log(numericList)

   
// let changes ; 
//     do {

//         changes= false; 

//         for ( let i =0 ; i < numericList.length -1   ; i++){

//             let a = numericList[i];
//             let b = numericList[i+1];
//            if ( a > b) {    
//               numericList [i] = b ;
//               numericList [i+1] = a;  
//               changes = true ; 
//            } 
        
//          } 

//     } while (changes)


   
// console.log(numericList)

/// first step 






// EXO 07 Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

// Notes
// If the input tries to divide by 0, return: "Can't divide by 0!"

/*
function calculator (num1,numOperator,num2){

switch (numOperator) {
    case "+":
         return num1 + num2
        
        break;
    case "-":
        return num1 - num2

        break ; 
    case "/":
        
         if ( num2 === 0){
            return "Can't divide by 0!" ; 
         } else {
            return num1 / num2 
         }
        break ; 
    case "*" :
        return  num1 * num2 
        break;   
}

} console.log(calculator(5654, "+",1000 ))

*/



// areaOfCountry("Russia", 17098242) ➞ "Russia is 11.48% of the total world's landmass"

// areaOfCountry("USA", 9372610), "USA is 6.29% of the total world's landmass"

// areaOfCountry("Iran", 1648195) ➞ "Iran is 1.11% of the total world's landmass"
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.


// Exercise 08 Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
 /*
function areaOfCountry (countryName,countryArea) {

    worldMass= 148940000 ;

    percent = (countryArea * 100)/ worldMass ;

    result = percent.toFixed(2)



    return `${countryName} is ${result}% of the total world's landmass`


}  console.log(areaOfCountry("Iran", 1648195)) */




// let reverseWords=  (" the sky is blue");

// reverseWords= (reverseWords.trim())
// reverseWords = (reverseWords.split(" "))
// reverseWords = reverseWords.filter ((el) => el)
// console.log(reverseWords)
// reverseWords= reverseWords.reverse();
// reverseWords= reverseWords.join(" ");
// console.log(reverseWords)

/*
function rvs (str){

let resultstring = str
     .trim( )
     .split(" ")
     .filter ((element) => element)
     .reverse();
     console.log(resultstring)
    return resultstring.join(" ");

}


console.log(rvs("the sky is blue"))*/


// reverseWords(" the sky is blue") ➞ "blue is sky the"

// reverseWords("hello   world!  ") ➞ "world! hello"

// reverseWords("a good example") ➞ "example good a"



/// ------------- ALGOS SERIE  03 --------------- ////

// 00.exo .


/*

let test = ["5","6","7"];


console.log(test.map(Number))



function suma (num){

    let stringNum = num
    .toString()
    .split("")
    //.map(Number)
    .reduce((accumulator, currentDigit) => accumulator + Number(currentDigit) ,0);
    console.log(stringNum)
    return stringNum % 2 === 0 ? "Evenish" : "Oddish";
}

console.log(suma("4433"))*/

// oddishOrEvenish(43) ➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0 -


// 01. EXO   Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

/*
console.log(getTotalPrice([
        { product: "Milk", quantity: 1, price: 1.50 },
        { product: "Eggs", quantity: 12, price: 0.10 },
        { product: "Bread", quantity: 2, price: 1.60 },
        { product: "Cheese", quantity: 1, price: 4.50 }
      ]))

  function getTotalPrice(items){

    return items.reduce((acc,item)=>{
        return acc + item.price * item.quantity ;

    },0) 

  } */ 


// // 1 bottle of milk:
// getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
//   ]) ➞ 1.5
  
//   // 1 bottle of milk & 1 box of cereals:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
//   ]) ➞ 4
  
//   // 3 bottles of milk:
//   getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ]) ➞ 4.5
  
//   // Several groceries:
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) ➞ 10.4
  
//   // Some cheap candy:
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
//   ]) ➞ 0.3




/// 02 EXO Given a string, reverse all the words which have odd length. The even length words are not changed. Notes
// There is exactly one space between each word and no punctuation is used.


/*

 function test2 (str){

    str = str.split(" ")
    let newArr = [];
    
    for ( let i = 0 ; i < str.length ; i++){
        if ((str[i].length % 2 ) !== 0) {
            newArr.push(str[i].split("").reverse().join(""))
        } else {  newArr.push(str[i])
       
        }
    

  return newArr.join(" "); 
}

 console.log(test2("Make sure uoy only esrever sdrow of ddo length"))

*/
 
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"


// encontrar primera letra  y encontrar ultima letra 



// 03 EXO -- Create a function that determines whether the input sentence is a smooth sentence, returning a boolean value true if it is, false if it is not.

/*
console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))


function isSmooth (userStr){


    userArray = (userStr.toLowerCase()).split(" ")

    let firstLetters = [];
    let endLetters = [];

    for ( let i = 0 ; i < userArray.length ; i++) {
   
       
    
        endLetters.push(userArray[i][userArray[i].length-1]) // find end letter of every word
        firstLetters.push(userArray[i][0])
        
    } console.log(firstLetters)
    console.log(endLetters)
    
    count = 0; 

    for (let i = 1 ; i <firstLetters.length ; i++){
        // count = 0;
        if ( firstLetters[i] === endLetters[i-1]){
            count ++;
        } else {
            count -- ;
        }

    } 

    if (count === firstLetters.length - 1){
        return true ; 
    } else {
        return false ; 
    }
}
    */

 ///////// TEST INPUTS  

// isSmooth("Marta appreciated deep perpendicular right trapezoids") ➞ true

// isSmooth("Someone is outside the doorway") ➞ false

// isSmooth("She eats super righteously") ➞ true



// EXO 04 SERIE 3

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".




// function sevenBoom(userArray){

//     userArray =  userArray.join("")
//     return userArray.includes("7") ?   "Boom!" : "there is no 7 in the array" ;  

// }



// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))



//test inputs  

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// // 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// // 97 contains the number seven.


// EXO 05 SERIE 3 




// Create a function that converts Celsius to Fahrenheit and vice versa.

// Notes
// Round to the nearest integer.
// If the input is incorrect, return "Error".
// Look on Google how to convert F to C and vice-versa


/*
console.log(convert("35°C"))

function convert (str){
    str = str.toLowerCase();
    str = str.split("°")

    console.log(str)

    findC = str.includes("c") 
    findF =  str.includes("f")

    if ( findC === true ){

        return Math.round((str[0] * 9/5 ) + 32) + "°F";
        
    } else if (findF === true ){

        return  Math.round((str[0]-32) * 5/9) + "°C" ;
    } else {
        return "Error"
    }


}   */



// convert("35°C") ➞ "95°F"

// convert("19°F") ➞ "-7°C"

// convert("33") ➞ "Error"

// ( °C × 9 / 5) + 32 =  °F

// (32 °F − 32) × 5 / 9 = 0 °C 


// exo06 serie 3 



// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// Notes
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.


// findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]

// findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]

// findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]

/*
console.log(findBrokenKeys("starry night", "starrq light"))

function findBrokenKeys(good, bad ){
    good = (good.replace(" ","") ).split("")
    console.log(good)
    bad = (bad.replace(" ","") ).split("")
    console.log(bad)
    let newArr = [];
    // if ( good[2] !== bad[2]){
    //     newArr.push(good[2])
    // }
    // console.log(newArr)

   for ( let i = 0 ; i < good.length ; i++ ){
    if ( good[i] !== bad[i]){
        newArr.push(good[i])
    }
    }

    let testLetters = [];
    newArr.forEach((element) => {
            if (!testLetters.includes(element)){
                testLetters.push(element);
            }
        });
        return testLetters;

        //return arrUnique = [...new Set(newArr) ]     // Set  creates a new array with every element but don´t repeat.  
    
   }   */ 



   ///////////   04.  ALGOS   ADVANCED   //////////// 





//    Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.

// But here’s the catch : multiple of 3 should print “Fizz” and multiples of 5 shoudl print “Buzz”. Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

// Notes
// Your code should be modular. You must be able to pass any numbers as n and the code should still work.

/*
console.log(fizzBuzz(50));
function fizzBuzz (num){
        
    for ( let i = 1 ; i <= num ; i++){    
        let countNumers ="" 
        if ( i % 3 !== 0 &&  i %5 !== 0  ){
            countNumers = countNumers + i ; 
        } else if ( i % 3 === 0 &&  i %5 === 0){
            countNumers = countNumers + "FizzBuzz";
        } else if (i % 3 === 0){
            countNumers = countNumers + "Fizz"; 
        } else {
            countNumers = countNumers + "buzz";
        }
        
        console.log(countNumers)      
    }  
} */

    /// exo 02 advanced  

// Write a function called ransomNote which takes two parameters : noteText and magazineText.

// The goal is : with all the words of magazineText, you should be able to create the noteText.

// The function should return true if we are able to write the noteText with the words from magazineText or false if we can't.


// noteText = "this is a secret note to you from a secret admirer"

// magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"


// ransomNote("this is a secret note to you from a secret admirer","puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you")

// function ransomNote (noteText,magazineText){

//     console.log(noteText.split(" "));
//     magazineText.split(" ");
    
// }




// let noteText= ["hello","this","is", "an","hello" ];

// let magazineText = [ "hello", "this","is", "an", "example", "lets" , "go", "to", "see"]



/*
function prueba (note, magazine) {

    const magazineText = magazine.split(" ");
    const noteText = note.split(" ");
    console.log(magazineText.includes("is"))
    for (let i = 0 ; i < noteText.length; i++ ){
        const indice = magazineText.indexOf(noteText[i])
        console.log(noteText[i])
        if (magazineText.includes(noteText[i])) {
           
        magazineText.splice(indice, 1 );
           
        } else {
            return false; 
        }
    
    } return true  ;
} 

console.log(prueba("this is a secret note to you from a secret admirer", "puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you"))  

*/ 

////////  EXO 03 Palindrome





//let firstText =  "Madam, I'm Adam" ; 

/*console.log(palindrome("race car"))

function palindrome(firstText){

    firstText = firstText.trim().toLowerCase().replace(" ","").split("")

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

firstText= firstText.filter((el) => {
    return alphabet.includes(el)
})


console.log(firstText)
let testReversed = [...firstText]
testReversed = testReversed.reverse()
console.log(testReversed)

for ( let i = 0 ; i < firstText.length ; i++){
    console.log(testReversed[i])
    console.log(firstText[i])

    if ( firstText[i] === testReversed[i]) {
        return true; 
    } else {
        return false;
    }
} 
} */

// isPalindrome("kayak") ---> true
// isPalindrome("race car") ---> true
// isPalindrome("hello world") ---> false
// isPalindrome("Madam, I'm Adam") ---> true







// EXO Exercise.  // Caesar Cipher
// caesarCipher("zoo keeper", 2) ----> "bqq mggrgt"

// caesarCipher("bqq mggrgt", -2) ----> "zoo keeper"

// caesarCipher("My name is Henrique", 3) ----> "pb qdph lv khqultxh "


//olssv

/*
console.log(caesarCipher("zoo keeper", 2))

function caesarCipher (str ,num){
    str= str.toLowerCase();
    
    let  alphabet= "abcdefghijklmnopqrstuvwxyz"
    alphabet= alphabet.split("");
    str = str.split("");
    let spacesIndex =[];
    const charSpace = " ";

    for (let i =0 ; i< str.length; i++){
        if ( str[i] === charSpace){
            spacesIndex.push(i)
        }

    } 
    let newArr= [];
    for ( let i = 0 ; i< str.length ; i++){
        if ( alphabet.indexOf(str[i]) !== -1){
            newArr.push(alphabet.indexOf(str[i]))
        } 
    }
    cipherArray = [];
    cipherArray = newArr.map((x) => {
        if (num < 0) {
            return (x + num + 26) % 26; // Ajuste para números negativos
        } else if (x + num > 25) {
            return (x + num) % 26; // Ajuste para números mayores a 25
        } else {
            return x + num;
        }
    });
    endArray =[];
    for ( let i =0 ; i <cipherArray.length ; i++){
        endArray.push(alphabet[cipherArray[i]])
        }
    for ( let i=0 ; i<spacesIndex.length; i++)  {
        endArray.splice(spacesIndex[i],0," "); 
    }  
       
    return endArray.join("");

}  */


// code simplifie 

/*
console.log(caesarCipher("My name is Henrique", 3))

function caesarCipher(str, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase(); // Convertir a minúsculas
    let result = "";

    for (let char of str) {   // for direct into the string 
        if (char === " ") {
            result += char; // Mantener los espacios
        } else {
            let currentIndex = alphabet.indexOf(char);  // find the str char index in the bucle 
            let newIndex = (currentIndex + num + 26) % 26; // Ajuste para desplazamientos
            result += alphabet[newIndex]; // Añadir la letra cifrada
        }
    }

    return result;
}*/



// EXO 04 Reverse 
/*
console.log(reverseStr("This is a string of words"))

function reverseStr (str){

    str= str.toLowerCase().split(" ")
    const result = str.map(  word => word.split("").reverse().join("") ).join(" ") 
    return result;
} */ 


// EXO 05 Reverse sans reverse 

//     Create a function that takes an array and reverses it.

// Notes
// Don't use reverse()
// Don't create a new array and push elements to it.

/*
    console.log(reverseArr(["salut","chao","sayonara",]))

    function reverseArr (arr){

        arr.sort((a , b ) => arr.indexOf(b) - arr.indexOf(a))

        return arr
    }  */ 





  

    /*Exercise. Two sums
Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.

Your function should return every pair of numbers from numArray that adds up to the 'sum'

Notes
The result should be an array of arrays.
Any number in the array can be used in multiple pairs (look at the "4" in the exemple below)


*/  

//     // For "sum" = 7
// [1, 6, 4, 5, 3, 3] ---> [[6,1], [3,4], [3,4]]


/*
console.log(mySum([1, 6, 4, 5, 3, 3] ,7)) 

function mySum (numArray,sum){

    let result = []; // array final to show 
    for (let i = 0 ; i< numArray.length ; i++){   // first bucle 

        for (let j = i+1 ; j< numArray.length ; j++){ /// second bucle  nested loop  
            if ( numArray[i]+ numArray[j] === sum ){
                result.push([numArray[j] , numArray[i]])
            }
        }

    }

    return result;

}  */ 



    //  EXO 07.Advanced fFibonacci

    // fFibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :

    // 1 1 2 3 5 8 13 21 34 ...
    
    // Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.
    
    // Notes
    // Recursion would be the best way to solve it but there is another simple way.


    function fibonacci(n) {
        
        let result = [1, 1];
        for (let i = 2; i < n; i++) {
            result.push(result[i - 1] + result[i - 2]);
        }
     
        return result
    }
    
    console.log(fibonacci(9));
    

//     fibonacci(4) ----> [1, 1, 2, 3]
// fibonacci(9) ----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
// fibonacci(6) ----> [1, 1, 2, 3, 5, 8]
