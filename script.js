$(document).ready(function() {
    $(window).scroll(function() {
        $('.header').css("opacity", 1 -
        $(window).scrollTop/500)})
    })

//  var header = document.querySelector(".header");
//  $(window).onscroll = function () {
//     header.classList.toggle("headertoggle");
//   };
