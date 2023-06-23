document.addEventListener('DOMContentLoaded', function() {

    // Grab elements from HTML Document
    const button = document.getElementById("Button");
    const body = document.querySelector("body");

    // Create an on click function to rendomize background color
    button.addEventListener('click', function() {
      var red = Math.floor(Math.random() * 256);
      var green = Math.floor(Math.random() * 256);
      var blue = Math.floor(Math.random() * 256);
      var randomColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

      // set the body background to randomColor variable which generates the random color
      body.style.backgroundColor = randomColor;
    });
  });
  