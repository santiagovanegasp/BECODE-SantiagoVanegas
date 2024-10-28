// Obtén el modal
const modal = document.getElementById("myModal");

// Obtén el botón que abre el modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtén el elemento <span> que cierra el modal
const closeBtn = document.querySelector(".close-btn");

// Cuando el usuario hace clic en el botón, abre el modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cuando el usuario hace clic en <span> (x), cierra el modal
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cuando el usuario hace clic fuera del contenido del modal, también lo cierra
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
