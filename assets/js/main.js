'use strict';

$(document).ready(function() {
  // slider
  var slider = $('#slider').slideReveal(); // slideReveal return $('#slider')

  $("#sidebar-wrapper").slideReveal({
    trigger: $("#toggle"),
    push: false,
    speed: 200,
    overlay: true
  });

  // this allows the second button to close the menu
  $("#toggleSidebar").mousedown(function() {
    $('#sidebar-wrapper').slideReveal("toggle");

});




  document.getElementById("fmuInfo").innerHTML = "Bachelor's of Science in Computer Science with a minor in Mathematics from Francis Marion University. Located in Florence, South Carolina.";

  // puts an image into an id.
  var fmuLogo = new Image(5,5);
  fmuLogo.src = "assets/images/White M2H.png";
  $("#fmuLogo").attr("src", fmuLogo.src);

});
