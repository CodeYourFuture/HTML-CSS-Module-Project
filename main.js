
  /** @format */

window.onload=function(){
  const menu_btn = document.querySelector(".hamburger");
  const responsive_menu = document.querySelector(".list");

  menu_btn.addEventListener('click', function() {
    responsive_menu.classList.toggle('active');

  });};

