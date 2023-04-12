// ************************************** Jquery Mouse Events **************************************
// (1) click
// (2) dblclick
// (3) contextmenu
// (4) mouseenter
// (5) mouseleave

$(document).ready(() => {
  // ******************* Click Mouse Event *******************

  $(".btn-primary").click(() => {
    $(".card").css("backgroundColor", "red");
  });

  // ******************* Double Click Mouse Event *******************

  $(".btn-primary").dblclick(() => {
    $(".card").css("backgroundColor", "blue");
  });

  // ******************* Right Click Mouse Event *******************

  $(".btn-primary").contextmenu(() => {
    $(".card").css("backgroundColor", "gold");
  });

  // ******************* Mouse Enter Event *******************

  $(".card").mouseenter(() => {
    $(".card").css("backgroundColor", "purple");
  });

  // ******************* Mouse Leave Event *******************
  $(".card").mouseleave(() => {
    $(".card").css("backgroundColor", "#fff");
  });
});
