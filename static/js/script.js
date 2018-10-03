$(function () {
  var   first_slide = $('.slider>.slide').first(),
        total_slides = $('.slider>.slide').length;

  first_slide.addClass('show');
  $('#indicator').html('1 / ' + total_slides);


  $('.next').click(function () {
    var   current_slide = $('.slider>.slide.show'),
          total_slides = $('.slider>.slide').length,
          should_loop = current_slide.next().length > 0,
          next_slide = should_loop ? current_slide.next() : $('.slider>.slide:first');

    current_slide.removeClass('show');
    next_slide.addClass('show');

    $('#indicator').html((next_slide.index() + 1) + ' / ' + total_slides);

  });


  $('.prev').click(function () {
    var   current_slide = $('.slider>.slide.show'),
          total_slides = $('.slider>.slide').length,
          should_loop = current_slide.prev().length > 0,
          prev_slide = should_loop ? current_slide.prev() : $('.slider>.slide:last');

    current_slide.removeClass('show');
    prev_slide.addClass('show');

    $('#indicator').html((prev_slide.index() + 1) + ' / ' + total_slides);

  });

});


$('.project-group>.header').click(function () {
  var   expander = $(this).siblings();
  
  expander.toggleClass('show');

  event.preventDefault();
});

$('#archive').click(function () {
  
  $('.overlay').addClass('hide');
  $('.project-group>.expander').addClass('show');

});
