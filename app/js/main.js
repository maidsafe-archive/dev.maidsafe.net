/* jshint undef: false*/
var fixNavResize = function() {
  /*jshint camelcase: false */
  /*jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
  if (Foundation.utils.is_medium_up() === true) {
    $('header .has-dropdown-holder').removeClass('has-dropdown');
    $('header .dropdown-holder').removeClass('dropdown');
    $('header nav').addClass('not-mobile');
    $('header .build-logo img').css({ 'left': 'auto' });
  } else if (Foundation.utils.is_small_only() === true) {
    $('header .has-dropdown-holder').addClass('has-dropdown');
    $('header .dropdown-holder').addClass('dropdown');
    $('header nav').removeClass('not-mobile');
    $('header .build-logo img').css({ 'left': '15px' });
  }
};
$('document').ready(function() {
  $('header li.parent-link a').contents().unwrap();
  fixNavResize();
});
$(window).resize(function() {
  fixNavResize();
});

// $('body').addClass('js');
// var $menu = $('#menu');
// var $menulink = $('.menu-link');
// var $menuTrigger = $('.has-submenu > a');
// $menulink.click(function(e) {
//   e.preventDefault();
//   $menulink.toggleClass('active');
//   $menu.toggleClass('active');
// });
// $menuTrigger.click(function(e) {
//   e.preventDefault();
//   var $this = $(this);
//   $this.toggleClass('active').next('ul').toggleClass('active');
// });
