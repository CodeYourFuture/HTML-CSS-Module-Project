// Declares hamburgerMenu and FullMenu variables then sets their value equal to the
// Id's nav-hamburger-Menu and nav-full-menu.
const hamburgerMenu = document.getElementById("nav-hamburger-Menu");
const fullMenu = document.getElementById("nav-full-Menu");

// Function to add click functionality to the hamburger menu. If the hamburger
// menu is clicked, the class show is toggled.
hamburgerMenu.addEventListener("click", () => {
  fullMenu.classList.toggle("show");
});
