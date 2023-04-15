// ************************************** Jquery On & Off Method Methods **************************************

// (1) on
// (2) off

$(document).ready(() => {
  // ******************* Adding Multiple Events In Element *******************

  $(".box").on({
    click: function () {
      $(this).css("background-color", "red");
    },

    mouseenter: function () {
      $(this).css("background-color", "blue");
    },

    mouseleave: function () {
      $(this).css("background-color", "green");
    },
  });

  // ******************* Removing Multiple Events In Element *******************


  $(".box").off("mouseenter mouseleave")
});
