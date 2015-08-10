$(function() {
  showSecondayNavigation();
  toggleSideMenu();
});
/**
 * Toggle Seconday Navigation
 */
var showSecondayNavigation = function() {
  $('#secNavButton').on('click', function() {
    var instance = $(this);
    var navList = $('#secNav');
    var subNav = $('.secondary-nav-sub');
    if (instance.hasClass('active')) {
      instance.removeClass('active');
    } else {
      instance.addClass('active');
    }
    if (subNav.hasClass('show')) {
      subNav.removeClass('show');
    }
    if (navList.hasClass('show')) {
      navList.removeClass('show');
      return;
    }
    navList.addClass('show');
  });

  $('#secNav .nav-list li').on('click', function() {
    var navList = $(this).children('.secondary-nav-sub');
    if (!navList) {
      return;
    }
    if (navList.hasClass('show')) {
      navList.removeClass('show');
      return;
    }
    navList.addClass('show');
  });
};

/**
 * Toggle Sidebar Navigation
 */

var toggleSideMenu = function() {
  $('#showSidemenu').on('click', function() {
    var instant = $(this);
    var sidemenu = $("#sidemenu");
    if (instant.hasClass('active')) {
      instant.removeClass('active');
      instant.children('a').text('show');
    } else {
      instant.addClass('active');
      instant.children('a').text('hide');
    }
    if (sidemenu.hasClass('show')) {
      sidemenu.removeClass('show');
      return;
    }
    sidemenu.addClass('show');
  });

  $('.left-side-menu > li > a').on('click', function(e) {
    var instant = $(this);
    if (e.target != this) {
      return;
    }
    if (instant.parent().hasClass('selected')) {
      instant.parent().removeClass('selected');
      return;
    }
    $('.left-side-menu li').removeClass('selected');
    instant.parent().addClass('selected');
  });
  $('.left-side-menu > li > ul > li > a').on('click', function(e) {
    var instant = $(this);
    if (e.target != this) {
      return;
    }
    $('.left-side-menu > li > ul > li').removeClass('selected');
    instant.parent().addClass('selected');
  });
}
