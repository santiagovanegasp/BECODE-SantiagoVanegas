// const fakeCallToAnAPIPromises = (url) => {
//     return new Promise((resolve, reject) => {
//       const delay = Math.floor(Math.random() * 4500) + 500;
//       setTimeout(() => {
//         if (delay > 4000) {
//           reject("Connection Timeout ! :(");
//         } else {
//           resolve(`Here is your fake data from ${url}`);
//         }
//       }, delay);
//     });
//   };




// fakeCallToAnAPIPromises("api/movies")
//   .then((data) => {
//     console.log("SUCCESS (1)");
//     console.log(data);
//     return fakeCallToAnAPIPromises("api/movies/7");
//   })
//   .then((data) => {
//     console.log("SUCCESS (2)");
//     console.log(data);
//     return fakeCallToAnAPIPromises("api/pictures/7");
//   })
//   .then((data) => {
//     console.log("SUCCESS (3)");
//     console.log(data);
//   })

//   .catch((error) => {
//     console.log(error);
//   });


/*  ejemplo explicativo 

const miPromesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia a false para simular un error

    if (exito) {
        const datos = { id: 1, nombre: "Juan" };
        resolve(datos); // Aquí se pasa el objeto `datos` a `resolve`
    } else {
        reject("No se pudo completar la operación.");
    }
});

// Consumir la promesa
miPromesa
    .then((resultado) => {
        console.log("Éxito:", resultado); // `resultado` recibe el valor que pasó `resolve`
    })
    .catch((error) => {
        console.error("Error:", error); // `error` recibe el valor que pasó reject en este caso 'string'
    });  */ 


    const body = document.querySelector('body');

    function changeColor(color) {
        return new Promise((resolve ) => {
            setTimeout(() => {
                body.style.backgroundColor = color;
                resolve(); // se " resuelve" la promesa , se puede o no pasar objetos o parametros a resolve. 
            }, 1000); // Cambia el color después de 1 segundo  >>> se lee de der a izq 
        });
    }


    
    // Consumir la promesa y encadenar cambios de color
    changeColor('yellow')
        .then(() => {
            console.log("Color cambiado a amarillo.");
            return changeColor('red'); // Cambiar a rojo después de 1 segundo
        })
        .then(() => {
            console.log("Color cambiado a rojo.");
            return changeColor('cyan'); // Cambiar a azul después de 1 segundo
        })
        .then(() => {
            console.log("Color cambiado a cyan.");
            return changeColor('violet'); // Cambiar a azul después de 1 segundo
        })

        .then(() => {
            console.log("Color cambiado a violet.");
            return changeColor('green'); // Cambiar a azul después de 1 segundo
        })

        .then(() => {
            console.log("Color cambiado a green.");
            return changeColor('purple'); // Cambiar a azul después de 1 segundo
        })

        .then(() => {
            console.log("Color cambiado a purple.");
            
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    



/*
const body = document.querySelector('body');

function changeColor (colors) {

    const [currentColor, ...nextColors] = colors;  // array destructuring

    setTimeout(() => {
        body.style.backgroundColor= currentColor;
        changeColor(nextColors);
      }, 1000);


};

changeColor(['yellow', 'red', 'cyan','violet','green','purple']);

*/ 


