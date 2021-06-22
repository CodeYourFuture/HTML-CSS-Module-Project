const btnMenu = document.getElementById("burger-menu-icon");
const menu = document.getElementById("menu-items");

btnMenu.addEventListener('click', function() {
    
        menu.style.display ="block"
        btnMenu.style.transform = "rotate(-90deg)"
})

