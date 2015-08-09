$(function() {
  showSecondayNavigation();
  toggleSideMenu();
});
/* exported setNavigationIndex */

/* jshint ignore:start */
// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
// $(document).foundation({
//   accordion: {
//     // specify the class used for accordion panels
//     content_class: 'content',
//     // specify the class used for active (or open) accordion panels
//     active_class: 'active',
//     // allow multiple accordion panels to be active at the same time
//     multi_expand: true,
//     // allow accordion panels to be closed by clicking on their headers
//     // setting to false only closes accordion panels when another is opened
//     toggleable: true
//   }
// });
/* jshint ignore:end */
// jscs:enable requireCamelCaseOrUpperCaseIdentifiers

/**
 * Toggle Seconday Navigation on click
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

var toggleSideMenu = function() {
  $('#showSidemenu').on('click', function() {
    var sidemenu = $("#sidemenu");
    if (sidemenu.hasClass('show')) {
      sidemenu.removeClass('show');
      return;
    }
    sidemenu.addClass('show');
  });

  $('.left-side-menu > li a').on('click', function(e) {
    var instant = $(this);
    if (e.target != this) {
      return;
    }
    if (instant.parent().hasClass('selected')) {
      instant.parent().removeClass('selected');
      return;
    }
    instant.parent().addClass('selected');
  });
}
