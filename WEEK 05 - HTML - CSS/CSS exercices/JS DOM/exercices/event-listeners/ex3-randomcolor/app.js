/*Write some JS code in order to :

When we click the button, the body should change its background color to a random color.
The text within the h1 should indicate the rgb numbers of this random color.
Little reminder :

rgb color is given by three numbers between 0 and 255. For example : rgb(26, 254, 56)*/


const btn= document.querySelector("button");

function randomColor (){

 ranNum1 = Math.round(Math.random() * 255);
 ranNum2 = Math.round(Math.random() * 255);
 ranNum3 = Math.round(Math.random() * 255);
 document.querySelector('body').style.backgroundColor = `rgb(${ranNum1},${ranNum2},${ranNum3})`;
 document.querySelector('h1').textContent= `rgb(${ranNum1},${ranNum2},${ranNum3})`;
} ;

btn.addEventListener("click", randomColor)


