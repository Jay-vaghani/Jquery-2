// ************************************** Jquery Add Remove and Toggle Class **************************************


// (1) addClass
// (2) removeClass
// (3) toggleClass


$(document).ready(() => {
  $("#add").click(() => {
    $(".box").addClass("active");
  });

  $("#remove").click(() => {
    $(".box").removeClass("active");
  });

  $("#toggle").click(() => {
    $(".box").toggleClass("active");
  });
});
