const burger = document.querySelector(".burger");
navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});