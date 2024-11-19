// Coordenadas del usuario actual
const userLat = 37.7749; // Ejemplo: San Francisco
const userLng = -122.4194;

// Lista de otros usuarios (con sus coordenadas)
const nearbyUsers = [
    { name: 'Usuario 1', lat: 37.7849, lng: -122.4094 },
    { name: 'Usuario 2', lat: 37.7649, lng: -122.4294 },
    { name: 'Usuario 3', lat: 37.7549, lng: -122.4394 },
];

// Crear el mapa y centrarlo en la posición del usuario actual
const map = L.map('map').setView([userLat, userLng], 13);

// Agregar los tiles de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 



// Agregar un marcador para el usuario actual
const userMarker = L.marker([userLat, userLng], { title: 'Tu ubicación' })
    .addTo(map)
    .bindPopup('Estás aquí.')
    .openPopup();

// Agregar marcadores para los usuarios cercanos
nearbyUsers.forEach(user => {
    L.marker([user.lat, user.lng], { title: user.name })
        .addTo(map)
        .bindPopup(`<b>${user.name}</b><br>Lat: ${user.lat}, Lng: ${user.lng}`);
});




