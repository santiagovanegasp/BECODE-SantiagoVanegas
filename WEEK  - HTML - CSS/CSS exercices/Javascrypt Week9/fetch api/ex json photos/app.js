//   crear una llamada a la api que genere 10 fotos aleatorias seleccionadas de las 500 con el titulo de cada photo 
// una vez obtenida la base de datos , - crear un div para cada photo el cual debe contener una  imagen aleatoria  y el  titulo de la misma 
// crear un div para cada foto , dentro de este div con una clase para manipular el widt crear una etiqueta img y el src se obtiene de la api 
// 

async function callJsonHolder () {

    try {

        const response = await fetch ('https://jsonplaceholder.typicode.com/photos');

        if (!response.ok ) {
            throw new Error("Error from server");  // modifcamos el error por defecto para luego utilizarlo en el catch 
        }

         const photos = await response.json();
         const containerPhotos= document.getElementById('containerPhotos') ;


        for (let i = 0 ; i <10 ; i++){
            let randomIndex= Math.floor(Math.random() * 5000);
            let randomPhoto = photos[randomIndex];
           
            const createPhotoDiv = document.createElement('div');
            createPhotoDiv.className = 'photo-container';

            const createImg = document.createElement('img'); 
            createImg.src=  randomPhoto.url;
            createImg.alt=  randomPhoto.title;

             // Crea un elemento de título y asigna el título de la foto
             const title = document.createElement('p');
             title.textContent = randomPhoto.title;
 
             // Añade la imagen y el título al contenedor
             createPhotoDiv.appendChild(createImg);
             createPhotoDiv.appendChild(title);
 
             // Agrega el contenedor al div principal
             containerPhotos.appendChild(createPhotoDiv);

        }       


    } catch (error) {
        console.error(error);
    }
} ; 

// Llama a la función para cargar las fotos
callJsonHolder();

// 