window.addEventListener("load", function() {
  backgroundFunc();
});

function backgroundFunc() {
  let currentTime = new Date().getHours();
  const isNight = currentTime >= 18 || currentTime < 5;
  var imageElement = document.getElementById('dayNightImage');

  if (isNight) {
    imageElement.src = 'images/night.jpeg';
  } 
  else {
    imageElement.src = 'images/day.jpeg';
  }
}

