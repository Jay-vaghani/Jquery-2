// ************************************** Jquery  Scroll Top & Scroll Left Method **************************************

// (1) scrollTop
// (2) scrollLeft

$(document).ready(function () {
  $(window).scroll(() => {
    // ***************** Get Scroll Values  *****************

    // Scroll Top

    // console.clear();
    // console.log($(window).scrollTop());

    // Scroll Left

    // console.clear();
    // console.log($(window).scrollLeft());


    // ***************** Set Scroll Values  *****************

    // Set Scroll Top

    $(".top").click(() => {
      $(window).scrollTop(0)
    })


    // Set Scroll Left


    $(".left").click(() => {
      $(window).scrollLeft(0)
    })



  });
});
