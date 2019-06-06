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




  // adding image and text to the Education section

  // puts an image into an id.
  var fmuLogo = new Image(5,5);
  fmuLogo.src = "assets/images/cropped-Site-Icon-Full-Color-e1502396334483 white.png";
  $("#fmuLogo").attr("src", fmuLogo.src);

  document.getElementById("fmuInfo").innerHTML = "B.S. in Computer Science, with a minor in Mathematics, from Francis Marion University. Located in Florence, South Carolina.";
  document.getElementById("computerScienceHonorGraduate").innerHTML = "Computer Science Honorary Graduate for the Class of 2019.";
  document.getElementById("presidentList").innerHTML = "Graduated with a cumulative 4.0 GPA, making the President's List each semester at Francis Marion University.";
  document.getElementById("upsilonPiEpsilon").innerHTML = "President of the Upsilon Pi Epsilon Computer Science Honor Society from 2018 to 2019.";
  document.getElementById("phiKappaPhi").innerHTML = "Inducted into Phi Kappa Phi Honor Society.";
  document.getElementById("scholarship").innerHTML = "Given ACS Technologies Scholarship for Computer Science curriculum performance.";


  // adding image and text to the Experience section

  document.getElementById("experienceParagraphPattons").innerHTML = "Consisted of working with Windows Server 2003, solving internet communication issues, 	computer and printer maintenance, Excel data entry and extraction, and software management.";
  document.getElementById("experienceParagraphPattons2").innerHTML = "Learned basic troubleshooting techniques, business logic, and organization skills that would help as I grew in my computational understanding through self-learning, projects, and collegiate studies.";

  document.getElementById("experienceParagraphACS").innerHTML = "Worked on a team of six interns making a web-based back-end API using Go and front-end heatmap to display events that occur on servers in real time using a time-series database. Full-time internship with mentors from company. Used SCRUM methodology as well as other agile software engineering techniques.";
  document.getElementById("experienceParagraphACSProject").innerHTML = "Created heatmap API with specialty in front-end web development. Used HTML, CSS, and JavaScript to hook into an API created by team of fellow interns for ACS Technologies. Also helped create backend API. Technologies include Go, Kafka Connect, and Docker Compose environments to integrate. Used GitHub for VCS and worked full-time for eight weeks using agile methodologies in a professional environment.";


  document.getElementById("experienceParagraphFMU").innerHTML = "Tasked with maintaining the SCHealthPlusMe application, create new pieces of software to help the maintainability of clinical data, educate fellow students, and oversee marketing. Created and maintained a web-based management piece of software that gives users the ability to add, remove, and access all locations entered into Firebase database. Wrote technical documentation that pairs with the source code of SCHealthPlusMe for easy maintainability and understanding. Researched new technology for future students to utilize for future iterations of the application.";

  document.getElementById("experienceParagraphFMUProject").innerHTML = "Engineered an Android application through Francis Marion University, for the state of South Carolina through a grant provided by SCRA, to assist local users with finding nearby health resources for medical needs. Also provided functionality to store the user’s health data locally for data logging in a journal format. Built with Java, Google Firebase, SQLite, and third-party libraries for graphically data representation. Created all imagery and logos associated with app, as well as the UX. Worked with agile methodologies and used GitHub for repository.";


  // adding image and text to the Technologies section


  // This way of adding elements to a list is more complicated than just adding
  // them in the HTML, but I wanted to generate the content form the JacaScript
  // since it is basic text, and can be applied to many other areas in th DOM.

  // this finds the correct ul for appendoing li children
  let technologyContentCoding = document.getElementById("technologyCoding");

  // Java li

  let liJava = document.createElement('li');

  // the left side describes the element created. The right side is the id name.
  liJava.setAttribute('data-id', "java");
  // THis sts the content of the li.
  liJava.textContent = "Java";

  // this appends that li to the ul that is found above.
  technologyContentCoding.appendChild(liJava);

  // Python li

  let liPy = document.createElement('li');

  liPy.setAttribute('data-id', "python");
  liPy.textContent = "Python";

  technologyContentCoding.appendChild(liPy);

  // HTML li

  let liHTML = document.createElement('li');

  liHTML.setAttribute('data-id', "html");
  liHTML.textContent = "HTML";

  technologyContentCoding.appendChild(liHTML);

  // CSS li

  let liCSS = document.createElement('li');

  liCSS.setAttribute('data-id', "css");
  liCSS.textContent = "CSS";

  technologyContentCoding.appendChild(liCSS);

  // JavaScript li

  let liJavaScript = document.createElement('li');

  liJavaScript.setAttribute('data-id', "javascript");
  liJavaScript.textContent = "JavaScript/JQuery";

  technologyContentCoding.appendChild(liJavaScript);

  // Bootstrap li

  let liBootstrap = document.createElement('li');

  liBootstrap.setAttribute('data-id', "bootstrap");
  liBootstrap.textContent = "Bootstrap 4";

  technologyContentCoding.appendChild(liBootstrap);

  // MySQL

  let liMySQL = document.createElement('li');

  liMySQL.setAttribute('data-id', "mysql");
  liMySQL.textContent = "MySQL";

  technologyContentCoding.appendChild(liMySQL);

  // SQLite

  let liSQLite = document.createElement('li');

  liSQLite.setAttribute('data-id', "sqlite");
  liSQLite.textContent = "SQLite";

  technologyContentCoding.appendChild(liSQLite);

  // PHP

  let liPHP = document.createElement('li');

  liPHP.setAttribute('data-id', "php");
  liPHP.textContent = "PHP";

  technologyContentCoding.appendChild(liPHP);

  // NoSQL

  let liNoSQL = document.createElement('li');

  liNoSQL.setAttribute('data-id', "nosql");
  liNoSQL.textContent = "NoSQL";

  technologyContentCoding.appendChild(liNoSQL);

  // Firebase

  let liFirebase = document.createElement('li');

  liFirebase.setAttribute('data-id', "firebase");
  liFirebase.textContent = "Firebase";

  technologyContentCoding.appendChild(liFirebase);

  // GitHub

  let liGitHub = document.createElement('li');

  liGitHub.setAttribute('data-id', "github");
  liGitHub.textContent = "GitHub";

  technologyContentCoding.appendChild(liGitHub);

  // Docker

  // let liDocker = document.createElement('li');
  //
  // liDocker.setAttribute('data-id', "docker");
  // liDocker.textContent = "Docker Compose";
  //
  // technologyContentCoding.appendChild(liDocker);

  // Kafka

  // let liKafka = document.createElement('li');
  //
  // liKafka.setAttribute('data-id', "kafka");
  // liKafka.textContent = "Kafka Connect";
  //
  // technologyContentCoding.appendChild(liKafka);

  // Couchbase

  let liCouchbase = document.createElement('li');

  liCouchbase.setAttribute('data-id', "couchbase");
  liCouchbase.textContent = "Couchbase";

  technologyContentCoding.appendChild(liCouchbase);

  // UML

  let liUML = document.createElement('li');

  liUML.setAttribute('data-id', "uml");
  liUML.textContent = "UML";

  technologyContentCoding.appendChild(liUML);

  // end of Programming Skills

  // start of Technology Environments

  // this finds the correct ul for appendoing li children
  let technologyContentEnvironment = document.getElementById("technologyEnvironments");

  // Android Studio

  let liAndroidStudio = document.createElement('li');

  liAndroidStudio.setAttribute('data-id', "android-studio");
  liAndroidStudio.textContent = "Android Studio";

  technologyContentEnvironment.appendChild(liAndroidStudio);

  // IntelliJ

  let liIntelliJ = document.createElement('li');

  liIntelliJ.setAttribute('data-id', "intellij");
  liIntelliJ.textContent = "IntelliJ";

  technologyContentEnvironment.appendChild(liIntelliJ);

  // PyCharm

  let liPyCharm = document.createElement('li');

  liPyCharm.setAttribute('data-id', "pycharm");
  liPyCharm.textContent = "PyCharm";

  technologyContentEnvironment.appendChild(liPyCharm);

  // PyCharm

  let liAtom = document.createElement('li');

  liAtom.setAttribute('data-id', "atom");
  liAtom.textContent = "Atom";

  technologyContentEnvironment.appendChild(liAtom);

  // Command Line

  let liCL = document.createElement('li');

  liCL.setAttribute('data-id', "cl");
  liCL.textContent = "Terminal/Command Line";

  technologyContentEnvironment.appendChild(liCL);

  // Slack

  let liSlack = document.createElement('li');

  liSlack.setAttribute('data-id', "slack");
  liSlack.textContent = "Slack";

  technologyContentEnvironment.appendChild(liSlack);

  // MATLAB

  let liMATLAB = document.createElement('li');

  liMATLAB.setAttribute('data-id', "matlab");
  liMATLAB.textContent = "MATLAB";

  technologyContentEnvironment.appendChild(liMATLAB);

  // R Studio

  // let liRStudio = document.createElement('li');
  //
  // liRStudio.setAttribute('data-id', "rstudio");
  // liRStudio.textContent = "R Studio";
  //
  // technologyContentEnvironment.appendChild(liRStudio);

  // VS Code

  let liVSCode = document.createElement('li');

  liVSCode.setAttribute('data-id', "vscode");
  liVSCode.textContent = "Visual Studio Code";

  technologyContentEnvironment.appendChild(liVSCode);

  // Photoshop CC

  let liPhotoshop = document.createElement('li');

  liPhotoshop.setAttribute('data-id', "photoshop");
  liPhotoshop.textContent = "Photoshop CC";

  technologyContentEnvironment.appendChild(liPhotoshop);

  // Lightroom CC

  let liLightroom = document.createElement('li');

  liLightroom.setAttribute('data-id', "lightroom");
  liLightroom.textContent = "Lightroom 5/CC";

  technologyContentEnvironment.appendChild(liLightroom);

  // Microsoft Office

  let liMSOffice = document.createElement('li');

  liMSOffice.setAttribute('data-id', "microsoft-office");
  liMSOffice.textContent = "Microsoft Office";

  technologyContentEnvironment.appendChild(liMSOffice);

  // Creately

  let liCreately = document.createElement('li');

  liCreately.setAttribute('data-id', "creately");
  liCreately.textContent = "Creately";

  technologyContentEnvironment.appendChild(liCreately);

  // Agile

  let liAgile = document.createElement('li');

  liAgile.setAttribute('data-id', "agile");
  liAgile.textContent = "Agile Methodologies";

  technologyContentEnvironment.appendChild(liAgile);

  // SCRUM

  let liSCRUM = document.createElement('li');

  liSCRUM.setAttribute('data-id', "agile");
  liSCRUM.textContent = "SCRUM";

  technologyContentEnvironment.appendChild(liSCRUM);

  // end of Technologies Environments

  // start of Exposure With

  let technologyContentExposed = document.getElementById("technologyExposed");

  // React

  let liReact = document.createElement('li');

  liReact.setAttribute('data-id', "react");
  liReact.textContent = "React";

  technologyContentExposed.appendChild(liReact);

  // Angular

  let liAngular = document.createElement('li');

  liAngular.setAttribute('data-id', "angular");
  liAngular.textContent = "Angular";

  technologyContentExposed.appendChild(liAngular);

  // Vue.js

  let liVue = document.createElement('li');

  liVue.setAttribute('data-id', "vue-js");
  liVue.textContent = "Vue.js";

  technologyContentExposed.appendChild(liVue);

  // node.js

  let liNodeJS = document.createElement('li');

  liNodeJS.setAttribute('data-id', "node-js");
  liNodeJS.textContent = "node.js";

  technologyContentExposed.appendChild(liNodeJS);

  // C

  let liC = document.createElement('li');

  liC.setAttribute('data-id', "c");
  liC.textContent = "C";

  technologyContentExposed.appendChild(liC);

  // Objective-C

  let liObjectiveC = document.createElement('li');

  liObjectiveC.setAttribute('data-id', "objective-c");
  liObjectiveC.textContent = "Objective-C";

  technologyContentExposed.appendChild(liObjectiveC);

  // Swift

  let liSwift = document.createElement('li');

  liSwift.setAttribute('data-id', "swift");
  liSwift.textContent = "Swift";

  technologyContentExposed.appendChild(liSwift);

  // Xcode

  let liXcode = document.createElement('li');

  liXcode.setAttribute('data-id', "xcode");
  liXcode.textContent = "Xcode";

  technologyContentExposed.appendChild(liXcode);

  // adding

  let liAdding = document.createElement('li');

  liAdding.setAttribute('data-id', "adding");
  liAdding.textContent = "Always Adding More...";

  technologyContentExposed.appendChild(liAdding);


});
