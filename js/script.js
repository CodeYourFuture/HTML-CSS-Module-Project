$(function() {
  $('.trigger').click(function() {
    $('.nav').slideToggle(function() {
      if (!$(this).is(':visible')) $(this).removeAttr('style');
    });
  });
});
