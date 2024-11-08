

// swippers CODE
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 4,        // 
      spaceBetween: 3,        // 
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      loop: true,              // infinite loop
  }) ; 




 // dom elements modals
const registermodal = document.querySelector(".modal-content");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close-btn");
const loginNavbarBtn = document.querySelector("#loginnavbar");
const modalWrapper = document.querySelector("#modal-wrapper");


// login modal activation
loginNavbarBtn.addEventListener("click", function () {
  modal.style.display = "block";
});


// close events 
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modal.style.display = "none";
  }
})

//////////// //////////// 


// dom elements modals


//////////// //////////// 






