'use strict';

$(document).ready(function() {
  // slider
  var slider = $('#slider').slideReveal(); // slideReveal return $('#slider')

  $("#sidebar").slideReveal({
    trigger: $("#toggle"),
    push: true,
    speed: 200
  });


});
