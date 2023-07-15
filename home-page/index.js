$(document).ready(function() {
  var backgrounds = ['background1', 'background2'];
  var currentIndex = 0;

  function changeBackground() {
    // Remove the current background class
    $('.container1').removeClass(backgrounds[currentIndex]);

    // Increment the index to get the next background class
    currentIndex = (currentIndex + 1) % backgrounds.length;

    // Add the new background class
    $('.container1').addClass(backgrounds[currentIndex]);
  }

  // Call the changeBackground function every 5 seconds
  setInterval(changeBackground, 5000);
});
