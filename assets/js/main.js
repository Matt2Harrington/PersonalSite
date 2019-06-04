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




  document.getElementById("experienceParagraphPattons").innerHTML = "Consisted of working with Windows Server 2003, solving internet communication issues, 	computer and printer maintenance, Excel data entry and extraction, and software management.";
  document.getElementById("experienceParagraphACS").innerHTML = "Worked on a team of six interns making a web-based back-end API using Go and front-end heatmap to display events that occur on servers in real time using a time-series database. Full-time internship with mentors from company. Used SCRUM methodology as well as other agile software engineering techniques.";
  document.getElementById("experienceParagraphACSProject").innerHTML = "Created heatmap API with specialty in front-end web development. Used HTML, CSS, and JavaScript to hook into an API created by team of fellow interns for ACS Technologies. Also helped create backend API. Technologies include Go, Kafka Connect, and Docker Compose environments to integrate. Used GitHub for VCS and worked full-time for eight weeks using agile methodologies in a professional environment.";


  document.getElementById("experienceParagraphFMU").innerHTML = "Tasked with maintaining the SCHealthPlusMe application, create new pieces of software to help the maintainability of clinical data, educate fellow students, and oversee marketing. Created and maintained a web-based management piece of software that gives users the ability to add, remove, and access all locations entered into Firebase database. Wrote technical documentation that pairs with the source code of SCHealthPlusMe for easy maintainability and understanding. Researched new technology for future students to utilize for future iterations of the application.";

  document.getElementById("experienceParagraphFMUProject").innerHTML = "Engineered an Android application through Francis Marion University, for the state of South Carolina through a grant provided by SCRA, to assist local users with finding nearby health resources for medical needs. Also provided functionality to store the user’s health data locally for data logging in a journal format. Built with Java, Google Firebase, SQLite, and third-party libraries for graphically data representation. Created all imagery and logos associated with app, as well as the UX. Worked with agile methodologies and used GitHub for repository.";



  // puts an image into an id.
  var fmuLogo = new Image(5,5);
  fmuLogo.src = "assets/images/cropped-Site-Icon-Full-Color-e1502396334483 white.png";
  $("#fmuLogo").attr("src", fmuLogo.src);

});
