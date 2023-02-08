const toggleButton = document.getElementById("toggle-button");
const topContainerNav = document.getElementsByClassName("top-container-nav")[0];

toggleButton.addEventListener("click", () => {
  // topContainerNav.classList.toggle("active");
  topContainerNav.classList.toggle("active");
  console.log("hi");
});
