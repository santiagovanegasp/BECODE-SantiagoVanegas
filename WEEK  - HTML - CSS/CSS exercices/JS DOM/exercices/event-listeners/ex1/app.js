// When Hello is clicked, alert : Oh my God ! You again !!!
// When Goodbye is clicked, alert : Thank God ! I thought you'd' never leave !

const listbtn= document.querySelectorAll("button"); 

const firstBtn = listbtn[0];//  first button

const secondBtn = listbtn[1];//  first button



const alertBtn1 = () => {
    alert("Oh my God ! You again !!!");
  };

const alertBtn2 = () => {
    alert("Thank God ! I thought you'd' never leave !");
};


firstBtn.addEventListener("click", alertBtn1);


secondBtn.addEventListener("click", alertBtn2);


