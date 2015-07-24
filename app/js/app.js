/* exported setNavigationIndex */

/* jshint ignore:start */
// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
$(document).foundation({
  accordion: {
    // specify the class used for accordion panels
    content_class: 'content',
    // specify the class used for active (or open) accordion panels
    active_class: 'active',
    // allow multiple accordion panels to be active at the same time
    multi_expand: true,
    // allow accordion panels to be closed by clicking on their headers
    // setting to false only closes accordion panels when another is opened
    toggleable: true
  }
});
/* jshint ignore:end */
// jscs:enable requireCamelCaseOrUpperCaseIdentifiers

/**
 * Sets the 'active' class to the index of the Main Navigation element starting from 0
 * @param index
 */
var setNavigationIndex = function(index) {
  $($('.custom-nav li')[index]).addClass('active');
};
