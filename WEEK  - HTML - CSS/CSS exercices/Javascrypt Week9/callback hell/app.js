// Write a program that gives the body background the color blue
// 1 second later it becomes yellow
// 1 second later it becomes red
// 1 second later it becomes cyan
// 1 second later it becomes violet
// 1 second later it becomes green
// 1 second later it becomes purple
// Sounds pretty simple isn'it ?

// But here are the restrictions :

// You CAN'T use setInterval
// You MUST set your setTimeout to 1 second for each color. (no doing maths counting 1,2,3,4,5 etc.)



const body = document.querySelector('body');




function changeColor (colors) {


    const [currentColor, ...nextColors] = colors;  // array destructuring

    setTimeout(() => {
        body.style.backgroundColor= currentColor;
        changeColor(nextColors);
      }, 1000);


};


changeColor(['yellow', 'red', 'cyan','violet','green','purple']);

