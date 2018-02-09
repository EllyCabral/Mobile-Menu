// must have jQuery library included

// same code for all buttons
$(document).ready(function($) {
  // when user clicks button, toggle the "open" class
  $('.lines').click(function(){
    // hamburger button
    $(this).toggleClass('open');
    // menu
    $('nav').toggleClass('open');
  });
});