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

/* fill in here*/

// Scrollify for each section

$(function() {
  $.scrollify({
    section : "section",
  });
});

// Select all links with hashes in the navbar and the sidebar
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


// function createModal(ID, title, forceStay, modalBody, cancel, submitBtn) {
//     // create the modal html in string representation
//     var modal = '<div class="modal fade" id="' + ID + '" tabindex="-1" role="dialog" aria-labelledby="Clinic ID" aria-hidden="false" data-keyboard="false">';
//     if (forceStay) {
//       modal = '<div class="modal fade" id="' + ID + '" tabindex="-1" role="dialog" aria-labelledby="Clinic ID" aria-hidden="false" data-backdrop="static" data-keyboard="false" >';
//     }
//     modal += '<div class="modal-dialog modal-dialog-centered" role="document">';
//     modal += '<div class="modal-content">';
//     modal += '<div class="modal-header">';
//     modal += '<h5 class="modal-title">' + title + '</h5>';
//     modal += '</div>';
//     modal += '<div class="modal-body">';
//     modal += modalBody;
//     modal += '</div>';
//     modal += '<div class="modal-footer">';
//     // add the cancel button if it is wanted
//     if (cancel) {
//       modal += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>';
//     }
//     modal += submitBtn;
//     modal += '</div></div></div></div>';
//     // makes the modal appear by converting the strings above into HTML
//     document.body.insertAdjacentHTML('beforeend', modal);
//     // handles if there are any page size changes
//     $('#' + ID).modal('handleUpdate');
//   }
//
//   function openRemoveModal() {
//     var removeClinicModalBtn = '<button type="button" id="removeClinicButtonFinal" class="btn btn-danger" data-dismiss="modal">Remove</button>';
//     var removeClinicBody = '<div class="form-group"><input id="clinicInput" type="text" class="form-control" name="clientIDBox" placeholder="Clinic ID" value=""></div>';
//     createModal('logInModal', 'Log In', true,
//       "Please Enter Your Password" + removeClinicBody, true, removeClinicModalBtn); // create reset modal for future use
//     // makes the modal open
//     $('#logInModal').modal({
//       keyboard: false,
//       backdrop: 'static'
//     });
//
//   document.getElementById('clinicInput').value = "";
//
//   // this function deletes the individual clinic by hash
//   function deleteClinic() {
//
//     var clinicID = getInputVal('clinicInput');
//     var docRef = db.collection("Locations").doc(clinicID);
//
//     docRef.get().then(function(doc) {
//       if (doc.exists) {
//         db.collection("Locations").doc(clinicID).delete().then(function() {
//             console.log("Document successfully deleted!");
//             successAlert(clinicID);
//         }).catch(function(error) {
//             console.error("Error removing document: ", error);
//         });
//       } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//         errorAlert("No Such Document");
//       }
//
//     }).catch(function(error) {
//       console.log("Error getting document:", error);
//       errorAlert("Please Enter A Clinic ID.")
//     });
//
//   } // end of deleteClinic method
//
//     var removeBtnModal = document.getElementById('removeClinicButtonFinal');
//     removeBtnModal.addEventListener('click', deleteClinic);
//   }
//   // this opens the Remove Clinic Modal
//   document.getElementById("addImage").addEventListener('click', openRemoveModal);


}); // ready
