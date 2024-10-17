
/*
When a button is clicked
the paragraph after it is displayed.
the text of the button is no longer "Open tab" but "Close tab"
If we click the button again, the paragraph disappears and the text of the button should be back to "Open tab"
*/


const btn= document.querySelectorAll('button');
const hid= document.getElementsByClassName('hidden');
// const parag= document.querySelectorAll('p');
// console.log(parag)




if (btn.textContent === "Open tab") {
    for ( let i = 0 ; i< btn.length ; i++){

        function test(){
            hid[i].style.display='block';
            btn[i].textContent = "Close tab";
        }
    
        btn[i].addEventListener("click", test);
    
    }

}  


// if (btn.textContent == "Close tab"){

//     for ( let i = 0 ; i< btn.length ; i++){

//         function test(){
//             hid[i].style.display='none';
//             btn[i].textContent = "Open tab";
//         }
    
//         btn[i].addEventListener("click", test);
    
//     }
// }





















// longway 

// function show0(){
//     hid[0].style.display='block'; 

// }

// btn[0].addEventListener("click", show0);



// function show1(){
//     hid[1].style.display='block'; 

// }

// btn[1].addEventListener("click", show1);



// function show2(){
//     hid[2].style.display='block'; 

// }

// btn[2].addEventListener("click", show2);



// function show3(){
//     hid[3].style.display='block'; 

// }

// btn[3].addEventListener("click", show3);











// firstBtn.addEventListener("click", alertBtn1);


// btn[0].addEventListener("click", show);


// const alertBtn2 = () => {
//     alert("Thank God ! I thought you'd' never leave !");
// };


