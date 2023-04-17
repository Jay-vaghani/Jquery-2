// ************************************** Jquery Before & After Method ************************************** 

// (1) after
// (2) before

$(document).ready(() => {
 

    $(".btn-1").click(function () {
        $(".list-group").after("<li class='list-group-item'>Item append</li>")
    })


    $(".btn-2").click(function () {
        $(".list-group").before("<li class='list-group-item'>Item append</li>")
    })



});
