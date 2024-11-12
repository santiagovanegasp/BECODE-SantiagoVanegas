/*

const swiper = new Swiper('.swiper-container', {
  
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 4, 
});  



/////////////// test 



const swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  pagination: {
      el: '.swiper-container2 .swiper-pagination',
      clickable: true
  },
  slidesPerView: 4, 
  navigation: {
      nextEl: '.swiper-container2 .swiper-button-next2',
      prevEl: '.swiper-container2 .swiper-button-prev2'
  }
});

const swiper3 = new Swiper('.swiper-container3', {
  loop: true,
  pagination: {
      el: '.swiper-container3 .swiper-pagination',
      clickable: true
  },
  slidesPerView: 4, 
  navigation: {
      nextEl: '.swiper-container3 .swiper-button-next3',
      prevEl: '.swiper-container3 .swiper-button-prev3'
  }
});


///////////////////___________////////////////  w500  api  



//////////// here

// Variables de acceso a elementos HTML
const inputSearchField = document.getElementsByClassName('inputRecherche')[0];  // Primer elemento con clase "inputRecherche"
const searchButton = document.getElementsByClassName('bouton-recherche')[0];  // Primer elemento con clase "bouton-recherche"

// Configuración de la API de TMDB
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '2673db0aadd5c7ad249c3ea0ea3c787b';

// Función para buscar películas
/* old version 
function searchMovie(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.results;  // Devuelve el array de resultados de películas
    });
} 

// async version

async function searchMovie(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;  //  results is the list with the movies info 
}



// Evento de búsqueda al presionar "Enter"
inputSearchField.addEventListener('keydown', function(event) {
  const query = inputSearchField.value;
  const spanResults= document.getElementById('inputResult');
  
  // Ejecuta la búsqueda solo si se presiona "Enter" y hay texto en el input
  if (event.key === 'Enter' && query) {   // si hay un evento de tecla > ' enter ' y query es truly 
    console.log('Buscando:', query);
    searchMovie(query).then(function(results) {
      console.log('Resultados de búsqueda:', results);
      spanResults.textContent= `"${query}"`;
      
      showImages(results); // 
    });
  }
});



// Evento de búsqueda al hacer clic en el botón
searchButton.addEventListener('click', function() {
  const query = inputSearchField.value;

  // Ejecuta la búsqueda solo si hay texto en el input
  if (query) {
    console.log('Buscando:', query);
    searchMovie(query).then(function(results) {
      console.log('Resultados de búsqueda:', results);
    });
  }
});


////////  Images for search results 


const baseImageUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w500';

const showImages = (results) => {
  const swiperContainer = document.getElementById('swiper-container-search'); 

  // Limpia el contenedor de cualquier resultado anterior
  swiperContainer.innerHTML = '';

  results.forEach((movie) => {
    if (movie.poster_path) {
      const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;

      // Crear el div con la clase "swiper-slide"
      const swiperDivImg = document.createElement('div');
      swiperDivImg.classList.add("swiper-slide");

      // Crear la imagen y asignarle la URL del póster
      const imageFromSearch = document.createElement('img');
      imageFromSearch.src = posterUrl;

      // Agregar la imagen al div
      swiperDivImg.appendChild(imageFromSearch);

      // Agregar el div al contenedor del swiper
      swiperContainer.appendChild(swiperDivImg);
    }
  });

  // Actualizar y re-inicializar Swiper después de añadir las imágenes
  swiper.update();
  swiper.init();
};  */





//////////



// Inicialización de Swiper (asegúrate de incluir el CSS y JS de Swiper en el HTML)

/*

let swiper;

document.addEventListener("DOMContentLoaded", function () {
  // Instancia Swiper solo una vez
  swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 4,
  });
});

// Variables de acceso a elementos HTML
const inputSearchField = document.getElementsByClassName('inputRecherche')[0];
const searchButton = document.getElementsByClassName('bouton-recherche')[0];
const spanResults = document.getElementById('inputResult');

// Configuración de la API de TMDB
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '2673db0aadd5c7ad249c3ea0ea3c787b';

// Función para buscar películas
async function searchMovie(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

// Evento de búsqueda al presionar "Enter"
inputSearchField.addEventListener('keydown', function(event) {
  const query = inputSearchField.value;
  
  if (event.key === 'Enter' && query) {
    console.log('Buscando:', query);
    spanResults.textContent = `"${query}"`;
    searchMovie(query).then(showImages);
  }
});

// Evento de búsqueda al hacer clic en el botón
searchButton.addEventListener('click', function() {
  const query = inputSearchField.value;

  if (query) {
    console.log('Buscando:', query);
    spanResults.textContent = `"${query}"`;
    searchMovie(query).then(showImages);
  }
});

// Función para mostrar imágenes en Swiper
const baseImageUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w500';

const showImages = (results) => {
  const swiperContainer = document.getElementById('swiper-container-search');
  swiperContainer.innerHTML = ''; // Limpia el contenedor de cualquier resultado anterior

  results.forEach((movie) => {
    if (movie.poster_path) {
      const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;

      // Crear el div con la clase "swiper-slide"
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add("swiper-slide");

      // Crear la imagen y asignarle la URL del póster
      const imageFromSearch = document.createElement('img');
      imageFromSearch.src = posterUrl;

      // Agregar la imagen al div y el div al contenedor del swiper
      swiperSlide.appendChild(imageFromSearch);
      swiperContainer.appendChild(swiperSlide);
    }
  });

  // Verifica si la instancia de swiper está disponible y actualízala
  if (swiper) {
    swiper.update(); // Actualiza Swiper para que reconozca los nuevos slides
  } else {
    console.error("La instancia de Swiper no está disponible.");
  }
};  */  




//////////// metodo retraso ___________ ///////// 


// Inicialización de Swiper (asegúrate de incluir el CSS y JS de Swiper en el HTML)
/*let swiper;

document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper();
});

// Función para inicializar Swiper
function initializeSwiper() {
  swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 4,
  });
}

// Variables de acceso a elementos HTML
const inputSearchField = document.getElementsByClassName('inputRecherche')[0];
const searchButton = document.getElementsByClassName('bouton-recherche')[0];

// Configuración de la API de TMDB
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '2673db0aadd5c7ad249c3ea0ea3c787b';

// Función para buscar películas
async function searchMovie(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results; 
}

// Evento de búsqueda al presionar "Enter"
inputSearchField.addEventListener('keydown', function(event) {
  const query = inputSearchField.value;
  const spanResults = document.getElementById('inputResult');
  
  if (event.key === 'Enter' && query) {
    console.log('Buscando:', query);
    searchMovie(query).then(function(results) {
      console.log('Resultados de búsqueda:', results);
      spanResults.textContent = `"${query}"`;

      // Destruir el swiper actual para reiniciarlo luego de cargar las imágenes
      if (swiper) swiper.destroy();

      // Mostrar imágenes con retraso en la inicialización de Swiper
      showImages(results);
    });
  }
});

// Evento de búsqueda al hacer clic en el botón
searchButton.addEventListener('click', function() {
  const query = inputSearchField.value;
  if (query) {
    console.log('Buscando:', query);
    searchMovie(query).then(function(results) {
      console.log('Resultados de búsqueda:', results);
      showImages(results);
    });
  }
});

// Función para mostrar las imágenes
const baseImageUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w500';

const showImages = (results) => {
  const swiperContainer = document.getElementById('swiper-container-search'); 
  swiperContainer.innerHTML = ''; // Limpia el contenedor de cualquier resultado anterior

  results.forEach((movie) => {
    if (movie.poster_path) {
      const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;

      // Crear el div con la clase "swiper-slide"
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add("swiper-slide");

      // Crear la imagen y asignarle la URL del póster
      const imageFromSearch = document.createElement('img');
      imageFromSearch.src = posterUrl;

      // Agregar la imagen al div y el div al contenedor del swiper
      swiperSlide.appendChild(imageFromSearch);
      swiperContainer.appendChild(swiperSlide);
    }
  });

  // Agregar un retraso antes de reinicializar el Swiper
  setTimeout(() => {
    initializeSwiper();  // Reinicializa el swiper con las nuevas imágenes
  }, 100); // Retraso de 1 segundo (ajusta el tiempo si es necesario)
}; */



  /////////  version 4  //////


  // Inicialización de Swiper (asegúrate de incluir el CSS y JS de Swiper en el HTML)
  let swiper;

  document.addEventListener("DOMContentLoaded", function () {
    initializeSwiper();
  });

  // Función para inicializar Swiper
  function initializeSwiper() {
    swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // autoplay: {
      //   delay: 3000,
      // },  ?? on/off
      slidesPerView: 4,
    });
  }

  // Variables de acceso a elementos HTML
  const inputSearchField = document.getElementsByClassName('inputRecherche')[0];
  const searchButton = document.getElementsByClassName('bouton-recherche')[0];

  // Configuración de la API de TMDB
  const baseUrl = 'https://api.themoviedb.org/3';
  const apiKey = '2673db0aadd5c7ad249c3ea0ea3c787b';

  // Función para buscar películas
  async function searchMovie(query) {
    const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results 
  }

  // Evento de búsqueda al presionar "Enter"
  inputSearchField.addEventListener('keydown', function(event) {
    const query = inputSearchField.value;
    const spanResults = document.getElementById('inputResult');
    
    if (event.key === 'Enter' && query) {
      console.log('Buscando:', query);
      searchMovie(query).then(function(results) {
        console.log('Resultados de búsqueda:', results);
        spanResults.textContent = `"${query}"`;

        // Destruye el swiper actual solo si existe y tiene la función destroy
        if (swiper && typeof swiper.destroy === "function") {
          swiper.destroy();
        }
          // Agregar un retraso antes de reinicializar el Swiper
        setTimeout(() => {
        initializeSwiper();  // Reinicializa el swiper con las nuevas imágenes
      }, 50); // Retraso de 1 segundo (ajusta el tiempo si es necesario)
        // Mostrar imágenes con retraso en la inicialización de Swiper
        showImages(results);
      });
    }
  });

  // Evento de búsqueda al hacer clic en el botón
  searchButton.addEventListener('click', function() {
    const query = inputSearchField.value;
    if (query) {
      console.log('Buscando:', query);
      searchMovie(query).then(function(results) {
        console.log('Resultados de búsqueda:', results);

        // Destruye el swiper actual solo si existe y tiene la función destroy
        if (swiper && typeof swiper.destroy === "function") {
          swiper.destroy();
        }
        // Agregar un retraso antes de reinicializar el Swiper
      setTimeout(() => {
      initializeSwiper();  // Reinicializa el swiper con las nuevas imágenes
    }, 50); // Retraso de 1 segundo (ajusta el tiempo si es necesario)
        showImages(results);
      });
    }
  });

  // Función para mostrar las imágenes
  const baseImageUrl = 'https://image.tmdb.org/t/p/';
  const posterSize = 'w500';
/*
  const showImages = (results) => {
    const swiperContainer = document.getElementById('swiper-container-search'); 
    swiperContainer.innerHTML = ''; // Limpia el contenedor de cualquier resultado anterior

    results.forEach((movie) => {
      if (movie.poster_path) {
        const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;

        const overview = movie.overview;  

        const title = movie.original_title;

        const date = movie.release_date;

        // Crear el div con la clase "swiper-slide"
        const swiperSlide = document.createElement('div');
        swiperSlide.classList.add("swiper-slide");

        // Crear la imagen y asignarle la URL del póster
        const imageFromSearch = document.createElement('img');
        imageFromSearch.src = posterUrl;

        // Agregar la imagen al div y el div al contenedor del swiper
        swiperSlide.appendChild(imageFromSearch);
        swiperContainer.appendChild(swiperSlide);
      }
    });

  
  };  */ 



    const showImages = (results) => {
      const swiperContainer = document.getElementById('swiper-container-search'); 
      swiperContainer.innerHTML = ''; // Limpia el contenedor de cualquier resultado anterior
  
      results.forEach((movie) => {
          if (movie.poster_path) {
              const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;
              const title = movie.original_title;
              const overview = movie.overview;
              const releaseDate = movie.release_date;
  
              // Crear el div con la clase "swiper-slide"
              const swiperSlide = document.createElement('div');
              swiperSlide.classList.add("swiper-slide");
  
              // Crear la imagen y asignarle la URL del póster
              const imageFromSearch = document.createElement('img');
              imageFromSearch.src = posterUrl;
  
              // Crear el contenedor para la información de la película
              const movieInfo = document.createElement('div');
              movieInfo.classList.add("movie-info");
  
              // Crear el título y el resumen
              const movieTitle = document.createElement('p');
              movieTitle.classList.add("movie-title");
              movieTitle.textContent = title;
  
              const movieOverview = document.createElement('p');
              movieOverview.classList.add("movie-overview");
              movieOverview.textContent = overview;
  
              // Añadir el título y el resumen al contenedor de información
              movieInfo.appendChild(movieTitle);
              movieInfo.appendChild(movieOverview);
  
              // Agregar la imagen y el contenedor de información al div del slide
              swiperSlide.appendChild(imageFromSearch);
              swiperSlide.appendChild(movieInfo);
  
              // Agregar el slide al contenedor de Swiper
              swiperContainer.appendChild(swiperSlide);
          }
      });
  };

  




