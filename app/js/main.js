/* jshint undef: false*/
var savedState;
var fixNavResize = function(check) {
  /*jshint camelcase: false */
  /*jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
  if (Foundation.utils.is_medium_up() === true && (check === 'ready' || savedState === 1)) {
    $('header .has-dropdown-holder').removeClass('has-dropdown');
    $('header .dropdown-holder').removeClass('dropdown');
    $('header nav').addClass('not-mobile');
    $('header .build-logo img').css({ 'left': 'auto' });
    $('footer .top li').css({ 'padding-bottom': '0'});
    $('footer .top li.homepage-link').css({ 'position': 'static', 'top': 'auto', 'left': 'auto%', 'margin-left': 'auto'});
    $('footer .top li.community-link').css({ 'margin-top': 'auto' });
    $('footer .top li.meetup-link').css({ 'margin-top': 'auto' });
    $('footer .top li.twitter-link').css({ 'margin-top': 'auto' });
    savedState = 0;
  } else if (Foundation.utils.is_small_only() === true && (check === 'ready' || savedState === 0)) {
    $('header .has-dropdown-holder').addClass('has-dropdown');
    $('header .dropdown-holder').addClass('dropdown');
    $('header nav').removeClass('not-mobile');
    $('header .build-logo img').css({ 'left': '15px' });
    $('footer .top li').css({ 'padding-bottom': '20px'});
    $('footer .top li.homepage-link').css({ 'position': 'absolute', 'top': '30px', 'left': '50%', 'margin-left': '-25%'});
    $('footer .top li.community-link').css({ 'margin-top': '100px' });
    $('footer .top li.meetup-link').css({ 'margin-top': '99px' });
    $('footer .top li.twitter-link').css({ 'margin-top': '-140px' });
    savedState = 1;
  }
};
$('document').ready(function() {
  $('header li.parent-link a').contents().unwrap();
  fixNavResize('ready');
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
