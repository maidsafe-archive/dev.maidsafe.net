
/*global $:false */
var bodyId = $('body').attr('id');
console.log(bodyId);
$('#side-menu .menu-category .menu-item.' + bodyId + ' a').css('color', '#5593d7');
$('.menu-category .menu-item.' + bodyId).parent().addClass('show');
$('.menu-category .menu-title.' + bodyId).parent().addClass('show');
console.log($('.menu-category .menu-item.' + bodyId));
var menuTitle = $('.menu-category .menu-title');
menuTitle.click(function() {
  $(this).nextAll().slideToggle('fast', function() {
  });
  $(this).nextAll().promise().done(function() {
    $(this).parent().toggleClass('show');
  });
});
var window = {};
var document = {};
// var menuStopped = false;
var sectionCount;
var sections = $('.cat-wrapper').children('h1');
var heights = [];
sections.each(function(i) {
  heights[i] = $(this).offset().top - 50;
  console.log(heights[i]);
});

// detect section count
var checkPosition = function(scrollp) {
  if (scrollp < heights[0]) {
    console.log(heights[0]);
    sectionCount = 0;
    $('#side-menu').css({ 'position': 'relative' });
  } else if (scrollp >= heights[0]) {
    $('#side-menu').css({ 'position': 'fixed', 'top': 0 });
    sectionCount = 1;
  // } else if (scrollp >= heights[1] && scrollp < heights[2]) {
  //   sectionCount = 2;
  // } else if (scrollp >= heights[2]) {
  //   sectionCount = 3;
  }
};

$(document).ready(function() {
  $(document).scroll(function() {
    var newScroll = $(window).scrollTop();
    checkPosition(newScroll);
  });
});
