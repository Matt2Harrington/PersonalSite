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

  // adding text to the education section
  document.getElementById("fmuInfo").innerHTML = "B.S. in Computer Science, with a minor in Mathematics, from Francis Marion University. Located in Florence, South Carolina.";
  document.getElementById("computerScienceHonorGraduate").innerHTML = "Computer Science Honorary Graduate for the Class of 2019.";
  document.getElementById("presidentList").innerHTML = "Graduated with a cumulative 4.0 GPA, making the President's List each semester at Francis Marion University.";
  document.getElementById("upsilonPiEpsilon").innerHTML = "President of the Upsilon Pi Epsilon Computer Science Honor Society from 2018 to 2019.";
  document.getElementById("phiKappaPhi").innerHTML = "Inducted into Phi Kappa Phi Honor Society.";

  // puts an image into an id.
  var fmuLogo = new Image(5,5);
  fmuLogo.src = "assets/images/cropped-Site-Icon-Full-Color-e1502396334483 white.png";
  $("#fmuLogo").attr("src", fmuLogo.src);

});
