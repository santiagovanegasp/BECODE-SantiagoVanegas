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
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:

let whisper = message.trim().toLowerCase();
console.log(whisper);

