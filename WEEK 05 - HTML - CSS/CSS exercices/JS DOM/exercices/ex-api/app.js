/* definir el div
crear contenido -img desde una url 
  encerrar el numero de pokemon en un span html 
  - iterar de manera que el numero de pokemon incremente hasta 151 y este numero modifique el texto en el span 



  Use JavaScript to :

Create an image tag for each Pokemon and append it to the container */






// addPokemon.setAttribute("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png");


// myDiv.appendChild(addPokemon);



    for ( let i = 1 ; i <152 ; i++){

        const myDiv= document.querySelector('.container');
    
    
        const addPokemon = document.createElement('img');
    
        addPokemon.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`);
    
        setTimeout(() => {
            myDiv.appendChild(addPokemon);
        }, i* 1000);

        // programa todo el bucle y luego lo muestra, por eso se muestra cada tiempo segun i
    }






