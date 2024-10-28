// Modal DOME
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");


openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// <span> (x)
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Click outside modal 
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


//////////////// __________    slider menu _________ //////////

const menu = document.getElementById('myMenu')

const openMenuBtn = document.getElementById("burgerBtn");

const closeBtnMenu = document.querySelector(".close-btn-menu");

openMenuBtn.addEventListener("click", function() {
  menu.style.display = "block";
});


closeBtnMenu.addEventListener("click", function() {
  menu.style.display = "none";
});


window.addEventListener("click", function(event) {
  if (event.target === menu) {
    menu.style.display = "none";
  }
});





