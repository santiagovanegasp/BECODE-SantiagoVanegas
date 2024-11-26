/////////  version 4  //////
let swiper;
let hasResults = false;

document.addEventListener("DOMContentLoaded", function () {
  initializeSwiper();
});

function initializeSwiper() {
  // Destruye cualquier instancia previa de Swiper
  if (swiper && typeof swiper.destroy === 'function') {
    swiper.destroy();
  }

  // Inicializa una nueva instancia de Swiper
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
    slidesPerView: 4,
  });
}

// DOM Elements
const inputSearchField = document.getElementsByClassName('inputRecherche')[0];
const searchButton = document.getElementsByClassName('bouton-recherche')[0];
const spanResults = document.getElementById('inputResult');
const swiperContainerSearch = document.getElementById('swiper-container-search');

// API Config
const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '2673db0aadd5c7ad249c3ea0ea3c787b';
const baseImageUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w500';

// API Functions
async function searchMovie(query) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&language=en-US`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function searchCast(movieId) {
  const url = `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.cast;
}

// Utility to get genres
const movieGenres = {
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" }
  ]
};

function getGenreNamesByIds(ids) {
  return ids
    .map(id => movieGenres.genres.find(genre => genre.id === id)?.name || "Unknown")
    .join('/');
}

// Function to show images in Swiper
const showImages = async (results) => {
  swiperContainerSearch.innerHTML = ''; // Clean the container

  if (results.length === 0) {
    swiperContainerSearch.innerHTML = '<p class="text-section">No results found</p>';
    hasResults = false;
    return;
  }

  hasResults = true;

  for (const movie of results) {
    if (movie.poster_path) {
      const posterUrl = `${baseImageUrl}${posterSize}${movie.poster_path}`;
      const title = movie.original_title;
      const overview = movie.overview;
      const releaseDate = movie.release_date.split("-")[0];
      const movieIdGenres = getGenreNamesByIds(movie.genre_ids);
      const votesAverage = movie.vote_average.toFixed(1);
      const movieId = movie.id;

      // Create Swiper Slide
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add("swiper-slide");

      const imageFromSearch = document.createElement('img');
      imageFromSearch.classList.add("movie-images-search");
      imageFromSearch.src = posterUrl;

      const movieInfo = document.createElement('div');
      movieInfo.classList.add("movie-info");

      const movieTitle = document.createElement('p');
      movieTitle.classList.add("movie-title");
      movieTitle.textContent = title;

      const releaseDateMovie = document.createElement('p');
      releaseDateMovie.classList.add("movie-release-date");
      releaseDateMovie.textContent = releaseDate;

      const genresText = document.createElement('p');
      genresText.classList.add('movies-genres');
      genresText.textContent = movieIdGenres;

      const averageVote = document.createElement('p');
      averageVote.classList.add('movies-votes');
      averageVote.textContent = `★ ${votesAverage}`;

      // Append all info
      movieInfo.appendChild(movieTitle);
      movieInfo.appendChild(releaseDateMovie);
      movieInfo.appendChild(genresText);
      movieInfo.appendChild(averageVote);

      swiperSlide.appendChild(imageFromSearch);
      swiperSlide.appendChild(movieInfo);

      // Open modal on click
      swiperSlide.addEventListener("click", async () => {
        const myCast = await searchCast(movieId);
        openModalWithMovieInfo(title, releaseDate, votesAverage, movieIdGenres, overview, posterUrl, myCast);
      });

      swiperContainerSearch.appendChild(swiperSlide);
    }
  }

  // Initialize Swiper
  initializeSwiper();
};

// Event Listeners
inputSearchField.addEventListener('keydown', async function (event) {
  if (event.key === 'Enter') {
    const query = inputSearchField.value.trim();
    if (query) {
      spanResults.textContent = `"${query}"`;
      const results = await searchMovie(query);
      await showImages(results);
    }
  }
});

searchButton.addEventListener('click', async function () {
  const query = inputSearchField.value.trim();
  if (query) {
    spanResults.textContent = `"${query}"`;
    const results = await searchMovie(query);
    await showImages(results);
  }
});

// Modal Functionality
function openModalWithMovieInfo(title, releaseDate, votesAverage, genres, overview, posterUrl, cast) {
  const modal = document.getElementsByClassName('modale-film-BGound')[0];
  modal.style.display = "block";

  document.querySelector('.titre-film').textContent = title;
  document.querySelector('.annee-film').textContent = releaseDate;
  document.querySelector('.note-film').textContent = `★ ${votesAverage}`;
  document.querySelector('.genre-film').textContent = genres;
  document.querySelector('.synopsis-film p').textContent = overview;
  document.querySelector('.image-film img').src = posterUrl;

  const castNames = cast.slice(0, 5).map(actor => actor.name).join(', ');
  document.querySelector('.cast-here').textContent = castNames;
}

function closeModal() {
  const modal = document.getElementsByClassName('modale-film-BGound')[0];
  const closeModalX = document.getElementById('close-btn-film-Modal');

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    if (closeModalX) {
      closeModalX.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }
  }
}

closeModal();
