function dropdownMenu() {
  document.getElementById("navID").classList.toggle("reveal");
}

window.onclick = function(event) {
  if (!event.target.matches(".navButton")) {
    var dropdown = document.querySelector("navContent");

    for (var i = 0; i < 3; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains("reveal")) {
        openDropdown.classList.remove("reveal");
      }
    }
  }
}

