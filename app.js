// ************************************** Jquery Width & Height Methods **************************************

// (1) width
// (2) innerWidth
// (3) outerWidth
// (4) outerWidth true

// (5) height
// (6) innerHeight
// (7) outerHeight
// (8) outerHeight true

$(document).ready(() => {
  // ******************* Set Element Width *******************

  $(".card").width("750px");

  // ******************* Get Element Width *******************

  console.log($(".box").width()); // width of the content inside element
  console.log($(".box").innerWidth()); // width including padding
  console.log($(".box").outerWidth()); // width including padding and border
  console.log($(".box").outerWidth(true)); // width including padding, border and margin


  console.log("*************************");

  // ******************* Set Element Height *******************

  $(".box").height("220px");

  // ******************* Get Element Height *******************


  console.log($(".box").height()); // height of the content inside element
  console.log($(".box").innerHeight()); // height including padding
  console.log($(".box").outerHeight()); // height including padding and border
  console.log($(".box").outerHeight(true)); // height including padding, border and margin

});
