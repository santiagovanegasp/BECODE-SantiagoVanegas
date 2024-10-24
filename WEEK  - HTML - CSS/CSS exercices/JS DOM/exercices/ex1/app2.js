const bold = document.querySelector("b");



// the body should have a background color of beige

const bodyColor = document.querySelector('body');
    bodyColor.style.backgroundColor = 'beige';

    bold.style.color = 'red';

const part2 = document.querySelector('.part-2');

part2.style.backgroundColor = 'darkblue';

part2.style.color = 'white';

const anchorT= document.querySelector('.part-2 a')

anchorT.style.color ='pink';


const part1 = document.querySelectorAll('li'); // RETURNS A NODE , its not possible to change propiertes , needs to be looped for each element

//part1.style.color ='orange';

part1.forEach(item => {
    item.style.color = 'orange';
  });


  console.log(typeof part1)



const linksList = document.querySelectorAll('.part-1 a') ;

linksList.forEach(item => {
    item.style.color = 'green';
  });


const tittle = document.querySelector('.container h1') ;

tittle.style.textTransform  = 'uppercase' ;



//   All a inside the lis should be green
//   Finally, the h1 should be uppercase.