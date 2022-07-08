// Get the container element
var btnContainer = document.getElementById("navigation__list");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("navigation__item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function activebutton() {
  var cc = document.getElementById("checkbox-placeorder").checked;
  if (cc === true) {
    document.getElementById("place-my-order").style.opacity = 1;
  } else {
    document.getElementById("place-my-order").style.opacity = 0.6;
  }
}
