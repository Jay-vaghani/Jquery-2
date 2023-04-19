// ************************************** Jquery Fade In, Fade Out, Fade Toggle, Fade To Methods ************************************** 
// (1) fadeOut
// (2) fadeIn
// (3) fadeToggle
// (4) fadeTo

$(document).ready(function () {

  // Hide Element Using Fade Out Method


  $(".fadeOut").click(function () {
      $(".card").fadeOut()
  })


  // Fade Out Method Width Transition (Give Parameters in Milliseconds)


  // $(".fadeOut").click(function () {
  //     $(".card").fadeOut(3000)
  // })


  // Fade Out Method Width Callback Function


  // $(".fadeOut").click(function () {
  //   $(".card").fadeOut(3000, function () {
  //     $("h2").text("Fade Out")
  //   })
  // })



  // Show Element Using FadeIn Method


  // $(".fadeIn").click(function () {
  //     $(".card").fadeIn();
  // });


  // FadeIn Method Width Transition (Give Parameters in Milliseconds)


  // $(".fadeIn").click(function () {
  //     $(".card").fadeIn(3000);
  // });


  // FadeIn Method Width Callback Function


  // $(".fadeIn").click(function () {
  //     $(".card").fadeIn(300, function () {
  //         $("h2").text("FadeIn")
  //     })
  // })


  // Hide And Show Element Using Fade Toggle Method


  // $(".fadeToggle").click(function () {
  //     $(".card").fadeToggle()
  // })


  // Fade Toggle Method Width Transition (Give Parameters in Milliseconds)


  // $(".fadeToggle").click(function () {
  //     $(".card").fadeToggle(3000)
  // })


  // Fade Toggle Method Width Callback Function


  // $(".fadeToggle").click(function () {
  //     $(".card").fadeToggle(3000, function () {
  //         $("h2").text("Fade Toggle")
  //     })
  // })


  // Fade To Method Width Parameters


  // $(".fadeTo").click(function () {
  //   $(".card").fadeTo(3000, 0, function () {
  //     $("h2").text("Fade To")
  //   })
  // })

});
