/*Ejercicio: Mostrar lista de usuarios
Usaremos el endpoint de JSONPlaceholder para obtener y mostrar una lista de usuarios.

Objetivo
Crea una pequeña aplicación que:

Haga una solicitud HTTP a https://jsonplaceholder.typicode.com/users para obtener un listado de usuarios.
Muestra la información de cada usuario en una lista ordenada en el HTML, incluyendo:
Nombre
Nombre de usuario
Correo electrónico
Requisitos
HTML: Añade un contenedor (<ul>) donde se mostrará la lista de usuarios.
JavaScript: Usa fetch para obtener los datos de la API, procesa la respuesta y muestra los datos en el HTML.
Manejo de errores: Si ocurre algún error en la solicitud, muestra un mensaje en la consola o en la página.

*/



// const jsonSearch = fetch ('https://jsonplaceholder.typicode.com/userssss')
// .then(res => res)
// .then(data => console.log(data))
// .catch(error => console.log(`Server error ${error} `))



// Función para obtener y mostrar los usuarios
async function fetchUsers() {
    try {
        // Realiza la solicitud GET a JSONPlaceholder
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
     
        // Verifica si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error("Error from server");
        }

        const users = await response.json(); // transform a JSON 

        console.log(users)

        // Recorre cada usuario y crea un elemento de lista para cada uno
        users.forEach(user => {
            const ListUL= document.createElement("ul");
            const myDivList = document.getElementById('myDivList'); //contenedor donde se mostrará la lista de usuarios 

            
            const listItemName = document.createElement("li");
            const listItemUser = document.createElement("li");
            const listItemEmail = document.createElement("li");

            listItemName.innerHTML = `<strong>${user.name}</strong> `; 
            listItemUser.textContent = `- Usuario: ${user.username},`;
            listItemEmail.textContent= `Email: ${user.email}`;

            // userList.appendChild(listItem);

            ListUL.appendChild(listItemName);
            ListUL.appendChild(listItemUser);
            ListUL.appendChild(listItemEmail);

            myDivList.appendChild(ListUL);


        });
    } catch (error) {
        // Manejo de errores
        console.error("Hubo un problema al obtener los usuarios:", error);
    }
}

// Llama a la función para obtener y mostrar los usuarios
fetchUsers();










