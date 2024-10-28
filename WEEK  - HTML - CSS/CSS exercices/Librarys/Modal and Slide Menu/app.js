//DOM

const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");  



openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});


closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

//if we click outside modal box, we close the modal too.
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
