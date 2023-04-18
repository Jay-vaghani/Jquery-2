// ************************************** Jquery Wrap & UnWrap Method ************************************** 

// (1) wrap 
// (2) unWrap


$(document).ready(() => {
   // ******************* Wrapping Element With Wrap *******************

  $(".wrap").click( () => {
    $(".box").wrap("<div class='container'></div>")
  });

  // ******************* Unwrapping Element With UnWrap *******************

  $(".unWrap").click( () => {
    console.log("ok");
    $(".box").unwrap()
  });
});
