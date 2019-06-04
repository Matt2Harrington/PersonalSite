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

  // puts an image into an id.
  var mattAboutPhoto = new Image(5,5);
  mattAboutPhoto.src = "assets/images/13082174.jpeg";
  $("#mattAboutPhoto").attr("src", mattAboutPhoto.src);


  // adding paragraph to about section
  document.getElementById("firstParagraphAbout").innerHTML = "Hello, my name is Matt Harrington," + " and I am Computer Science Graduate from Francis Marion University."
  + " I love all types of technology, and working with it." + " Over the past fifteen years of my twenty-two year"
  + "  old life, I have been thankful enough to be exposed to technology" + "  that has changed my life for the better.";

  document.getElementById("secondParagraphAbout").innerHTML = "Even when I was in elementary school, I loved mathematics. Over the years,"
  + "  this passion of science and numbers lead me to pursure a field of engineering." + "  The coolest part was that I had a piece of tech in my hands all of those years as well."
  + "  This lead to me making a decison to pursue a computer science degree.";


  document.getElementById("thirdParagraphAbout").innerHTML = "Since making that declaration, I have been driven, since day one, to"
  + "  give college my absolute 100%. From the first day of my freshman year," + "  until the last exam, I have and will give it my all. I want to do more"
  + "  than what is accepted. I want to work harder than the norm, and deliver" + " myself a life I have always dreamed about."










  // adding text to the education section
  document.getElementById("fmuInfo").innerHTML = "B.S. in Computer Science, with a minor in Mathematics, from Francis Marion University. Located in Florence, South Carolina.";
  document.getElementById("computerScienceHonorGraduate").innerHTML = "Computer Science Honorary Graduate for the Class of 2019.";
  document.getElementById("presidentList").innerHTML = "Graduated with a cumulative 4.0 GPA, making the President's List each semester at Francis Marion University.";
  document.getElementById("upsilonPiEpsilon").innerHTML = "President of the Upsilon Pi Epsilon Computer Science Honor Society from 2018 to 2019.";
  document.getElementById("phiKappaPhi").innerHTML = "Inducted into Phi Kappa Phi Honor Society.";
  document.getElementById("scholarship").innerHTML = "Given ACS Technologies Scholarship for Computer Science curriculum performance.";

  // puts an image into an id.
  var fmuLogo = new Image(5,5);
  fmuLogo.src = "assets/images/cropped-Site-Icon-Full-Color-e1502396334483 white.png";
  $("#fmuLogo").attr("src", fmuLogo.src);

});
