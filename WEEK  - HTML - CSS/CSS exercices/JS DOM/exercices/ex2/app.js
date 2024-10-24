// Use JavaScript to generate exactly 100 buttons and append it to the container div.

// Inside each button there has to be a text "I am button 1", 2, 3, 4 etc.

// Also, change the h1 text to There are a lot of buttons here !

// Lastly... make the buttons appear and the text changes only after 2 seconds (we saw setTimeOut() already)


const divBody= document.querySelector('.container');
const tittle = document.querySelector('h1');


// divBody.append(createBtn);




function changes (){

    for ( let i=0 ; i < 100 ; i++){

        const createBtn = document.createElement('BUTTON');   // needs to be in the loop to create diferents buttons each time 
        createBtn.textContent = "I am button " + (i+1); // add textContent
        divBody.append(createBtn); // add the btn created into the div 
    }
    
    tittle.textContent= "There are a lot of buttons here !";
}

setTimeout(changes, 2000);  // starts the changes in 2 seconds   


/////////////










