// ************************************** Jquery Clone Method **************************************

// (1) appendTo  // Only Remove Content Inside Element
// (2) prependTo // Remove Element

$(document).ready(() => {
  $(".clone").click(function () {
    let cloneH3 = $(".card h3").clone();
    let cloneP = $(".card p").clone();

    $(".card2").append(cloneH3)
    $(".card2").append(cloneP)
  });
});
