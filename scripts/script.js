
window.onload=function(){
    document.getElementById("menu-hamburger").addEventListener("click", toggleMenu);
    window.addEventListener("resize", function(event) {
        if (navBar.classList.contains("nav-mobile")) {
            navBar.classList.remove("nav-mobile");
            navBar.classList.add("navigation");
        }
    })
}

const toggleMenu = () => {
    var navBar=document.getElementById("navigation");
    console.log("clicked")
    if (navBar.classList.contains("nav-mobile")) {
        navBar.classList.remove("nav-mobile");
        navBar.classList.add("navigation");
    } else {
        navBar.classList.remove("navigation");
        navBar.classList.add("nav-mobile");
    }
   
}