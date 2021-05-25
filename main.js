const navLinks=document.querySelector('.nav-links');
const hamburgerMenu=document.querySelector('.hamburger-menu');
hamburgerMenu.addEventListener('click', openMenu);
function openMenu(){
  // console.log('clicked');
  navLinks.classList.toggle('show-menu');
}