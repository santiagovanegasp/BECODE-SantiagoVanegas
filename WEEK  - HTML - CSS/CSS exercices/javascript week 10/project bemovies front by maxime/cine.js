// const API_KEY = '16ef32b76dc3749d3bf466d0b0a48cb3'; // Remplacez par votre clé API
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR`;
// imageFilm=document.querySelector('.imageFilm')
// imageTest=document.querySelector('.imageTest')

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     console.log(data.results[0]); // Affiche les données des films populaires
//   })
//   .catch(error => {
//     console.error('Erreur:', error);
//   });

//   const fetchMovies = async () => {
    
//       const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR`);
//       const data = await response.json();
//       const movies = data.results;
  
      
       
//         const backdropPath = movie.backdrop_path;
        
//        for (let i = 0; i < movie.length; i++) {
//         const fullImageUrl = `https://image.tmdb.org/t/p/original${backdropPath[i]}`;
        
//           const creationImage= document.createElement("img")
//           creationImage.src=`${fullImageUrl}`
          
//           imageTest.appendChild(creationImage)
          
//           console.log(`Backdrop URL: ${fullImageUrl}`);
//        }
//       }


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
