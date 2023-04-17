// ************************************** ReplaceWith & ReplaceAll **************************************

// (1) replaceWith
// (2) replaceAll

$(document).ready(() => {
  // ******************* Replace Element With Replace With *******************

  $(".replaceWith").click(function () {
    $(".card h3").replaceWith(
      "<h2 class='text-white fw-semibold'>New Heading</h2>"
    );
  });

  // ******************* Replace Element With Replace All *******************

  $(".replaceAll").click(function () {
    $("<h2 class='text-white fw-semibold'>New Heading</h2>").replaceAll(
      ".card h3"
    );
  });
});
