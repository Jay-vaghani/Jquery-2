// ************************************** Jquery wrapInner Method **************************************

// (1) wrapInner

$(document).ready(() => {
  // ******************* Creating Element Inside Element *******************

  $(".wrapInner").click(() => {
    $(".box p").wrapInner("<b></b>");
  });
});
