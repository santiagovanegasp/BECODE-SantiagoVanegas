/*There is a button for each player that increments the score.

When we arrive at 5 total games, the buttons are disabled (we can't click them anymore). And the score of the winner becomes green and the color of the loser becomes red.

Then, you can click on a button reset to start all over again.*/

const btn= document.querySelectorAll('button');


let contadorplayer1 = 0;
let contadorplayer2 = 0;

const scrPlayer1 = document.querySelector('.plr1');

const scrPlayer2 = document.querySelector('.plr2');

console.log("hello");

function verifyWinner () {

    if ( contadorplayer1 === 5 || contadorplayer2 === 5  )  {
        btn[0].style.display= 'none';
        btn[1].style.display= 'none';

        if (contadorplayer1 === 5 ) {
        scrPlayer1.style.color= 'green';
        scrPlayer2.style.color= 'red';
        }else  {
            scrPlayer1.style.color= 'red';
            scrPlayer2.style.color= 'green';
        }  
    } 
};

btn[0].addEventListener('click', () => {
    contadorplayer1++;
    scrPlayer1.textContent= contadorplayer1;
    console.log('Contador Player 1: ' + contadorplayer1); 
    verifyWinner();
    
});

btn[1].addEventListener('click', () => {
    contadorplayer2++;
    scrPlayer2.textContent= contadorplayer2;
    verifyWinner();
    
});


btn[2].addEventListener('click', () => {  //reset
    contadorplayer2=0;
    contadorplayer1=0;
    scrPlayer2.textContent= contadorplayer2;
    scrPlayer1.textContent= contadorplayer1;
    btn[1].style.display= 'inline-block';
    btn[0].style.display= 'inline-block';
    scrPlayer1.style.color= 'black';
    scrPlayer2.style.color= 'black';
 
});

// 








