const button = document.querySelector('#btn');
const modalDiv = document.querySelector('#modalDiv');

button.addEventListener('click', function () {

const newdiv = document.createElement('div');
const para = document.createElement('p');
para.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus asperiores, eveniet accusantium inventore ea dolorem mollitia. Autem eveniet eos ab nostrum, optio a odit, accusantium neque culpa velit voluptate laudantium.' ;

modalDiv.appendChild(newdiv);
newdiv.appendChild(para);


}); 