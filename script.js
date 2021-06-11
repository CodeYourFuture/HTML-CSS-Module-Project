const hamburgerMenu = document.getElementById("nav-hamburger-Menu");
const fullMenu = document.getElementById("nav-full-Menu");
const w = document.documentElement.clientWidth || window.innerWidth;

// Feels a bit hacky as I had to add this to ensure the menu loads closed and doesn't
// break on first load if the screen size is greater than or equal to 769px.
// Felt a little less hacky doing it like this (and fun!) although I realise I could have
// done this in one line with fullMenu.classList.toggle("show"); :-)
if (w > 0) {
  fullMenu.classList.toggle("show");
}

// Add click functionality to the hamburger menu.
hamburgerMenu.addEventListener("click", () => {
  fullMenu.classList.toggle("show");
});
