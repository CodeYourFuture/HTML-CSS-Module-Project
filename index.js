const menu=document.getElementById('menu');
const clos=document.querySelector('.close');
menu.addEventListener('click', show);

function show(){
    menu.classList.toggle('menu-close');
   clos.classList.toggle('open');
}

