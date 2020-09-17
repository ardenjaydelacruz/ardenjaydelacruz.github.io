$(document).ready(function () {
  AOS.init();
  $(".button-collapse").sideNav({
    menuWidth: 400, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 5000
  });
});