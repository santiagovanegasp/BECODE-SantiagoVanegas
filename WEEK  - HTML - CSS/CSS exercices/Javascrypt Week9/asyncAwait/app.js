// const myFunc = async () => {
//     // Some code here
//   };
  
//   // Or :
  
//   async function myFunc() {
//     // Some code here
//   }

/*
  const myFunc = async () => {
    const response = await getSomeData(); // getSomeData here returns a promise
    const data = await getAnotherData(response); // getAnotherData returns a promise as well
    console.log(data);
  };

  Create a function generateBG that takes two parameters (color, delay)
This function returns a promise that turns the background color of the body color after delay time. Then it resolves.
Now you create an async function that calls and wait generateBG for each color given in the exercise :
blue
yellow
red
cyan
violet
green
purple

Now, let's give it a litte bit of imprevisibility :

In the function generateBG, create a random number between 0 and 0.999
If the random number is bigger than 0.5, reject the promise.
Run your program.
You'll see that at some point you'll get a native browser error (Uncaught (in promise))
We want to handle this error and not have the default error that breaks our code.
Use try/catch to console.log oh no! an error if there is a problem
(remember, you have a 50% chance of getting an error, so play with the condition in generateBG to have less or more chances )
  
  
  */





/*   async await exo background color 
  const body = document.querySelector('body');

 // we create the function and we need to define the promese in the return block
  async function generateBG(color, delay) {   //async is not demantory in this case 

    let randNum = Math.random();

    return new Promise((resolve,reject) => {
      setTimeout(() => {
        body.style.backgroundColor = color;
        if (randNum > 0.7){
          reject(`number is ${randNum}` )
        } else {
              resolve(); // Resuelve la promesa una vez cambiado el color
          }
      }, delay);
    });
  };




// Función asíncrona principal para llamar a generateBG en secuencia
async function changeColors() {

  try {
  await generateBG('blue', 1000);
  await generateBG('yellow', 1000);
  await generateBG('red', 1000);
  await generateBG('cyan', 1000);
  await generateBG('violet', 1000);
  await generateBG('green', 1000);
  await generateBG('purple', 1000);
  } catch (error) {
    console.error("secuence error random ", error);
  };
  
};

// Llamar a la funcion 
changeColors();

*/ 

// const fetchData = async () => {
//   const res = await fetch("https://catfact.ninja/fact", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     }, // etc.
//   });
//   const data = await res.json();
//   console.log(data);
// };

// fetchData();


fetch('https://catfact.ninja/fact')
  .then(res => console.log(res))


fetch('https://catfact.ninja/fact')
  .then(res => res.json())    // Convierte el cuerpo de la respuesta a JSON
  .then(data => console.log('hello this is ', data))
