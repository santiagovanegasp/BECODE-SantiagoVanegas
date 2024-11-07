// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjczZGIwYWFkZDVjN2FkMjQ5YzNlYTBlYTNjNzg3YiIsIm5iZiI6MTczMDcyNzI2NS4yOTM0OTk1LCJzdWIiOiI2NzI4YzhmYjJlMWI3OTc4ZGJiMzljYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NrRxkrdEhzt6M8sjsJZZBIUJQrQAMOm3C-IH9-WlwNU'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.error(err));



// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjczZGIwYWFkZDVjN2FkMjQ5YzNlYTBlYTNjNzg3YiIsIm5iZiI6MTczMDcyNzI2NS4yOTM0OTk1LCJzdWIiOiI2NzI4YzhmYjJlMWI3OTc4ZGJiMzljYTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NrRxkrdEhzt6M8sjsJZZBIUJQrQAMOm3C-IH9-WlwNU'
//   }
// };


fetch('https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&language=es-ES&with_genres=28')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));

  


    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 4,        // 
      spaceBetween: 3,        // 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true,              // infinite loop
  }) ; 



 // Selecciona los elementos necesarios
const registermodal = document.querySelector(".modal-content");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close-btn");
const loginNavbarBtn = document.querySelector("#loginnavbar");
const modalWrapper = document.querySelector("#modal-wrapper");

// Evento para cerrar el modal al hacer clic en el botón de cerrar
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// Evento para cerrar el modal al hacer clic en cualquier parte fuera de modal-content


// Evento para abrir el modal al hacer clic en el botón de login
loginNavbarBtn.addEventListener("click", function () {
  modal.style.display = "block";
});


modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modal.style.display = "none";
  }
})



//////// ca march , ne touche pas //// 