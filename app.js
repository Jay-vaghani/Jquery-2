// ************************************** Jquery Position & Offset Method **************************************

// (1) position:
//              *   Gives You The Position Of Element According To Your Parent Element
//              *   Ignores The Margin And Padding
//              *   Can Not Set Position Of Element

// (2) offset:
//            *   Gives You The Exact Position Of Element According To Body
//            *   Position Absolute
//            *   Can Set Position Of Element

$(document).ready(function () {
  // Get Position Of Element

  $(".getPosition").click(() => {
    $("h1 span").html(`${$(".card").position().top}`);
    $("h1:nth-child(2) span").html(`${$(".card").position().left}`);
  });

  // Get Offset Of Element

  $(".setPosition").click(() => {
    $(".card").offset({
      top: 300,
      left: 300,
    });
  });
});
