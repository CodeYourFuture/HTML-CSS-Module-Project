const BtnMenu = document.querySelector('.menu_box');
 const nav = document.querySelector('.mobile_nav');
 let OpenMenu = false;
 let SmallNav = false;  
BtnMenu.addEventListener('click', () => {
 if(!OpenMenu){
     BtnMenu.classList.add('open');
     OpenMenu = true;
 } else{
     BtnMenu.classList.remove('open');
     OpenMenu = false;
 }




});



