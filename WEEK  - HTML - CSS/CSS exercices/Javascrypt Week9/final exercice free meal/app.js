

// URL base de la API
const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function searchMeals() {
  const query = document.getElementById("searchInput").value;

  if (query.trim() === "") {
    alert("Por favor, ingresa una comida para buscar");
    return;
  }

  try {
    const response = await fetch(`${API_URL}${query}`);
    const data = await response.json();
    displayResults(data.meals);
  } catch (error) {
    console.error("Error al buscar comidas:", error);
    alert("Hubo un error al buscar la comida. Inténtalo nuevamente.");
  }
}

function displayResults(meals) {
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = "";

  if (!meals) {
    resultContainer.innerHTML = "<p>No se encontraron resultados.</p>";
    return;
  }

  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close-btn");
  const mealsModalContentBox = document.querySelector(".modal-content");

  // Función para obtener la lista de ingredientes
  function getIngredientsList(meal) {
    let ingredientsHTML = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredientsHTML += `<li>${measure ? measure : ""} ${ingredient}</li>`;
      }
    }
    return ingredientsHTML;
  }

  // Crear el contenido HTML de cada comida y agregar evento de clic
  meals.forEach((meal) => {
    const mealElement = document.createElement("div");
    mealElement.classList.add("meal");

    mealElement.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <a href="#" class="openModalBtn"> 
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="200">
      </a>
      <p><strong>Categorie:</strong> ${meal.strCategory}</p>
      <p><strong>Cuisine:</strong> ${meal.strArea}</p>
      
    `;

    resultContainer.appendChild(mealElement);

    // Agregar evento click en cada imagen para abrir el modal con información de la comida específica
    mealElement.querySelector(".openModalBtn").addEventListener("click", function (event) {
      event.preventDefault(); // Evitar redirección

      // Limpiar el contenido previo del modal y agregar nuevo contenido
      mealsModalContentBox.innerHTML = `
        <span class="close-btn">&times;</span>
        <h2>${meal.strMeal}</h2>
        <h3>Ingredients</h3>
        <ul>${getIngredientsList(meal)}</ul>
        <h3>Instructions</h3>
        <p>${meal.strInstructions}</p>
      `;

      modal.style.display = "block"; // Mostrar el modal

      // Agregar evento para cerrar el modal al hacer clic en el botón de cerrar
      mealsModalContentBox.querySelector(".close-btn").addEventListener("click", function () {
        modal.style.display = "none";
      });
    });
  });

  // Cerrar el modal si se hace clic fuera de él
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}
