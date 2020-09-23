$(document).ready(function () {
  AOS.init();
  $(".button-collapse").sideNav({
    menuWidth: 600, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  // $('.carousel').slick({
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   adaptiveHeight: true,
  //   mobileFirst: true
  // });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    duration: 1000,
    indicators: true,
    noWrap: false
  });
});