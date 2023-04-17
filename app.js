// ************************************** Jquery Empty & Remove Method **************************************

// (1) empty  // Only Remove Content Inside Element
// (2) remove // Remove Element

$(document).ready(() => {
  // ******************* Remove Content Inside Element *******************

  $(".empty").click(() => {
    $(".card").empty();
  });

  // ******************* Remove Element *******************

  $(".remove").click(() => {
    $(".card").remove();
  });
});
