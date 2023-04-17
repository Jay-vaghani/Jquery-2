// ************************************** Jquery Append & Prepend Method **************************************

// (1) append
// (2) prepend

$(document).ready(() => {
  $(".btn-1").click(function () {
    $(".list-group").append("<li class='list-group-item'>Item append</li>");
  });

  $(".btn-2").click(function () {
    $(".list-group").prepend("<li class='list-group-item'>Item append</li>");
  });
});
