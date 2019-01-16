$(function () {
  var first_slide = $('.slider>.slide:first-of-type'),
    total_slides = $('.slider>.slide').length;

  first_slide.addClass('show');
  $('.indicator').html('1 / ' + total_slides);


  $('.next').click(function () {
    var slider = $(this).closest('.content').children('.slider'),
      current_slide = slider.children('.slide.show'),
      total_slides = slider.children('.slide').length,
      should_loop = current_slide.next().length > 0,
      next_slide = should_loop ? current_slide.next() : slider.children('.slide:first');

    current_slide.removeClass('show');
    next_slide.addClass('show');

    $('#indicator').html((next_slide.index() + 1) + ' / ' + total_slides);

  });


  $('.prev').click(function () {
    var slider = $(this).closest('.content').children('.slider'),
      current_slide = slider.children('.slide.show'),
      total_slides = slider.children('.slide').length,
      should_loop = current_slide.prev().length > 0,
      prev_slide = should_loop ? current_slide.prev() : slider.children('.slide:last');

    current_slide.removeClass('show');
    prev_slide.addClass('show');

    $('#indicator').html((prev_slide.index() + 1) + ' / ' + total_slides);

  });

});

$('.gallery').click(function () {
  $('.gallery').hide();
  $('.controller').addClass('off');
  $('.toc-wrapper, footer, .nav-links').removeClass('blur');
});

$('.controller').click(function () {
  $('.gallery').show();
  $('.controller').removeClass('off');
  $('.toc-wrapper, footer, .nav-links').addClass('blur');
});

$(".gallery > div:gt(0)").hide();

setInterval(function () {
  $('.gallery > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(0)
    .end()
    .appendTo('.gallery');
}, 2000);




$('.shop>.header').click(function () {
  var expander = $(this).siblings(),
      opensign = $('.opennow, .opensoon');

  expander.toggleClass('show');
  opensign.toggleClass('hide');

  shop.prshopDefault();
});

$('#archive').click(function () {

  $('.overlay').addClass('hide');
  $('.shop>.toc-expander').addClass('show');

});


$(function () {
  var loc = window.location.href;
  if (/designers/.test(loc)) {
    $('.toc-wrapper, footer, .nav-links').removeClass('blur');
  }
  if (/info/.test(loc)) {
    $('.toc-wrapper, footer, .nav-links').removeClass('blur');
  }
});


$('.bio-expand-container>a').click(function () {
  
  var expand = $(this).parent().children('.bio-expander');

  expand.toggleClass('show');
  $(this).toggleClass('active');

  
  if ($(".active")[0]) {
    $('.bio-expand-container a').addClass('inactive');
    $('.active').removeClass('inactive')
  } else {
    $('.bio-expand-container a').removeClass('inactive');
  }

});


$(function () {
  var open     = $('.shop[data-open="true"]'),
      opensoon = $('.shop[data-opensoon="true"]');

  open.children('.header').append('<div class="opennow">Open now</div>');
  opensoon.children('.header').append('<div class="opensoon">Opening soon</div>');
  
});

$(function () {
  open  = $('.shop[data-event="true"]');

  open.addClass('event');
  
});