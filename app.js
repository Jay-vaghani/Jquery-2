// ************************************** Jquery Form Events **************************************

// (1) focus
// (2) blur
// (3) select
// (4) change
// (5) submit

$(document).ready(() => {
  // ******************* Focus Form Event *******************

  $("input[type=email] , input[type=password]").focus(function () {
    $(this).css("background-color", "#eee");
  });

  // ******************* Blur Form Event *******************

  $("input[type=email] , input[type=password]").blur(function () {
    $(this).css("background-color", "#fff");
  });

  // ******************* Select Form Event *******************

  $("input[type=email] , input[type=password]").select(function () {
    $(this).css("background-color", "#e8e8e8e8");
  });

  // ******************* Change Form Event *******************

  $("input[type=email] , input[type=password]").change(function () {
    console.log(this.value);
  });

  // ******************* Submit Form Event *******************

  $("#form").submit((e) => {
    e.preventDefault();
  });
});
