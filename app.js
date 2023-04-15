// ************************************** Jquery Set Methods From Html Element **************************************

// (1) html
// (2) text
// (3) attr

$(document).ready(() => {
  // ******************* Set Text Method *******************

  // $("h3").text("Hello World");


   // ******************* Set HTML Method *******************

  $("p").html("<h1 class='text-primary'>lorem ipsum dolor sit amet</h1>")



     // ******************* Set Attribute Method (class, id) *******************

     $("p").attr("class","text-center")

});
