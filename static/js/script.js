

$(function() {
  var first_slide = $('.slider>.slide').first();

  first_slide.addClass('show');
})

$('.next').click(function () {
  var total_slides = $('.slider.slide').length,
    current_slide = $('.slider>.slide.show'),
    current_position = $(current_slide).index() + 1,

    first_slide = $('.slider>.slide').first(),
    slide_plus = $(current_slide).next(),

    next_slide = current_position == total_slides ? first_slide : slide_plus;

  current_slide.removeClass('show');
  next_slide.addClass('show');

})

$('.prev').click(function () {
  var total_slides = $('.slider>.slide').length,
    current_slide = $('.slider>.slide.show'),
    current_position = $(current_slide).index() + 1,

    last_slide = $('.slider>.slide').last(),
    slide_minus = $(current_slide).prev(),

    prev_slide = current_position == 1 ? last_slide : slide_minus;

  current_slide.removeClass('show');
  prev_slide.addClass('show');

})