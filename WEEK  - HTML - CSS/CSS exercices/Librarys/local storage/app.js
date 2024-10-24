const myArr = [1, true, "hello"];
const myStringFromArr = JSON.stringify(myArr);

console.log(myStringFromArr);
console.log(typeof(myStringFromArr))

// Will log the string : "[1, true, 'hello']". This is a string !

myArrBackFromStr = JSON.parse(myStringFromArr);

console.log(myArrBackFromStr);
console.log(typeof(myArrBackFromStr))

// Will log the array [1, true, 'hello']. This is an array !