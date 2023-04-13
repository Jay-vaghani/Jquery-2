// ************************************** Jquery Window Events **************************************

// (1) scroll
// (2) resize

$(document).ready(() => {
  // ******************* Scroll Form Event *******************

  $(window).scroll((e) => {
    console.log(window.scrollY);
  });

  // ******************* Resize Form Event *******************

  $(window).resize(function (e) {
    $("h1").html(window.outerWidth);
  });
});
