$(function(){
  $('.btn').click(function() {
    location.href = $(this).attr('data-url');
  });
});
