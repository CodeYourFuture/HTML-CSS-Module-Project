
var toggleButton = document.getElementsByClassName('toggle-button')[0];
var navLink = document.getElementsByClassName('nav-link')[0];
toggleButton.addEventListener('click',showMenu);
function showMenu(){
    navLink.classList.toggle("active");
}