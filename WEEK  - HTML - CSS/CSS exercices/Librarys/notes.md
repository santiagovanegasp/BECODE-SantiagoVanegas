


localStorage.setItem("firstName", "Henrique"); // Sets the key/value pair in the local storage
localStorage.getItem("firstName"); // Returns "Henrique"
localStorage.removeItem("firstName"); // Removes the key/value pair "firstName"/"Henrique" from your local storage. WHY WOULD YOU DO THAT !!!???
localStorage.clear(); // Removes everyhting from you local storage.


ATTENTION : The key/value pair in local storage only accepts strings


So if you want to convert an array for example to a string and vice versa, there are two methods you can use 

JSON.stringify(); // Converts your javascript value to a string.

JSON.parse(); // Converts your string to a javascript value.

>>>>>>>>>>>>>>

so 

const myArr = [1, true, "hello"];
const myStringFromArr = JSON.stringify(myArr);

console.log(myStringFromArr);

// Will log the string : "[1, true, 'hello']". This is a string !

myArrBackFromStr = JSON.parse(myStringFromArr);

console.log(myArrBackFromStr);

// Will log the array [1, true, 'hello']. This is an array !