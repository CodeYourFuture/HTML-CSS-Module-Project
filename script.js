const btnMenu = document.getElementById("burger-menu-icon");
const menu = document.getElementById("menu-items");

btnMenu.addEventListener('click', function() {
    
        menu.classList.toggle ("active");
})

