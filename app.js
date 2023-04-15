// ************************************** Jquery CSS Methods **************************************

// (1) addClass
// (2) removeClass
// (3) toggleClass

$(document).ready(() => {
  // $(".box").css("background-color", "red");
  // $(".box").css("width", "200px");
  // $(".box").css("height", "200px");

  // ******************* Adding Multiple Css Properties *******************

  $(".box").css({
    backgroundColor: "red",
    width: "200px",
    height: "200px",
  });
});
