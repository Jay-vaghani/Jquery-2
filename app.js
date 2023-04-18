// ************************************** Jquery WrapAll Method **************************************  

// (1) wrapAll 

$(document).ready(() => {
   

$(".wrapAll").click(() => {
  $(".box p").wrap("<div class='bg-info'></div>")
})
  
});
