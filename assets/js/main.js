'use strict';

$(document).ready(function() {
  // slider
  var slider = $('#slider').slideReveal(); // slideReveal return $('#slider')

  $("#sidebar-wrapper").slideReveal({
    trigger: $("#toggle"),
    push: true,
    speed: 200
  });

  // this allows the second button to close the menu
  $("#toggleSidebar").mousedown(function() {
    $('#sidebar-wrapper').slideReveal("toggle");
  });
});
