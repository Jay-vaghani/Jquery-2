// ************************************** Jquery Slide Up, Slide Down And Slide Toggle Method ************************************** 


// (1) slideUp 
// (2) slideDown 
// (3) slideToggle 



$(document).ready(function () {

  // Hide Element Using Slide Up Method


  // $(".slideUp").click(function () {
  //   $(".card").slideUp()
  // })


  // Slide Up Method Width Transition (Give Parameters in Milliseconds)


  // $(".slideUp").click(function () {
  //   $(".card").slideUp(700)
  // })


  // Slide Up Method Width Callback Function


  $(".slideUp").click(function () {
    $(".card").slideUp(700, function () {
      $("h2").text("Hide")
    })
  })


  // Show Element Using Slide Down Method

  // $(".slideDown").click(function () {
  //     $(".card").slideDown()
  // })


  // Slide Down Method Width Transition (Give Parameters in Milliseconds)


  // $(".slideDown").click(function () {
  //     $(".card").slideDown(700)
  // })


  // Slide Down Method Width Callback Function


  // $(".slideDown").click(function () {
  //   $(".card").slideDown(700, function () {
  //     $("h2").text("Slide Down")
  //   })
  // })



  // Hide And Show Element Using Slide Toggle Method


  $(".slideToggle").click(function () {
      $(".card").slideToggle()
  })


  // Slide Toggle Method Width Transition (Give Parameters in Milliseconds)


  // $(".slideToggle").click(function () {
  //     $(".card").slideToggle(700)
  // })


  // Slide Toggle Method Width Callback Function


  // $(".slideToggle").click(function () {
  //     $(".card").slideToggle(700, function(){
  //         $("h2").text("Toggle")
  //     })
  // })

});
