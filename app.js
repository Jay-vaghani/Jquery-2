// ************************************** Jquery  Hide, Show And Toggle Method **************************************

// (1) hide
// (2) show
// (3) toggle

$(document).ready(function () {
  // Hide Element Using Hide Method


  // $(".hide").click(() => {
  //   $(".card").hide();
  // });


  // Hide Method Width Transition (Give Parameters in Milliseconds)


  $(".hide").click(() => {
    $(".card").hide(300);
  });


  // Hide Method Width Callback Function


  $(".hide").click(function () {
    $(".card").hide(300, function () {
      $("h2").html("Hide");
    });
  });


  // *************************************************


  // Show Element Using Show Method


  // $(".show").click(function () {
  //     $(".card").show()
  // })


  // Show Method Width Transition (Give Parameters in Milliseconds)


  // $(".show").click(function () {
  //     $(".card").show(300)
  // })


  // Show Method Width Callback Function


  // $(".show").click(function () {
  //     $(".card").show(300, function(){
  //         $("h2").text("Show")
  //     })
  // })
});
