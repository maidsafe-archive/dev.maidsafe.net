
/*global $:false */
var $menuTitle=$('.menu-category .menu-title');
$menuTitle.click(function(){
    $(this).nextAll().slideToggle('fast', function(){
        $(this).parent().toggleClass('show');
    });
});
var window = {};
var document = {};
// var menuStopped = false;
var sectionCount;
var footerTop = $('#container').height() + $('header').height();
var sections = $('.cat-wrapper').children('h1');
var heights = new Array();
sections.each(function(i){
  heights[i]=$(this).offset().top;
  console.log(heights[i]);   
});

// detect side-menu rotation and section count
var checkPosition = function(scrollp) {
  if (scrollp < heights[0]) {
    console.log(heights[0]);   
    sectionCount = 0;
    $('#side-menu').css('position','relative');
  } else if (scrollp >= heights[0] && scrollp < heights[1]) {
    $('#side-menu').css({'position':'fixed', 'top':0});
    sectionCount = 1;
  } else if (scrollp >= heights[1] && scrollp < heights[2]) {
    sectionCount = 2;
  } else if (scrollp >= heights[2]) {
    sectionCount = 3;
  }
};


// to be called by top or side menus (scrolling nav)
// (function() {
//   /* jshint unused:false */
//   var clickChange = function(clickRotate, scrollTo, menuShow, topMenu) {
//     var scrollTarget = $(scrollTo).offset().top - 80;
//     if (topMenu) {
//       topClicking = true;
//     }
//     clicking = true;
//     degreeRotate = clickRotate;
//     console.log(clickRotate + ' ' + scrollTo + ' ' + menuShow);
//     menuTransform(menuRotate, degreeRotate);
//     $('html, body').animate({
//       scrollTop: scrollTarget
//     }, 1000, function() {
//       clicking = false;
//       topClicking = false;
//     });
//     menuRotate = degreeRotate;
//     if (clickRotate !== 0) {
//       $(menuShow + ' .active').css('display', 'block');
//     }
//   };
// })();

// rotates any object
// $.fn.animateRotate = function(oAngle, nAngle, duration, easing, complete) {
//   var args = $.speed(duration, easing, complete);
//   var step = args.step;
//   return this.each(function(i, e) {
//     args.complete = $.proxy(args.complete, e);
//     args.step = function(now) {
//       $.style(e, 'transform', 'rotate(' + now + 'deg)');
//       if (step) {
//         return step.apply(e, arguments);
//       }
//     };

//     $({ deg: oAngle }).animate({ deg: nAngle }, args);
//   });
// };

$(document).ready(function() {
  var scrollPos = $(window).scrollTop();
  $(document).scroll(function() {
    var newScroll = $(window).scrollTop();
    checkPosition(newScroll);
//     // stop side menu from scrolling past footer
//     var menuTop = $(window).scrollTop() - 60;
//     var menuBottom = menuTop + $('#side-menu').height();
//     // console.log('menuTop: ' + menuTop + 'menuBottom: ' + menuBottom + ' footerTop: ' + footerTop);
//     if (menuBottom >= footerTop) {
//       $('#side-menu').css({ 'position': 'absolute', 'top': footerTop - $('#side-menu').height() + 130 });
//       globeStopped = true;
//     } else if (menuBottom < footerTop) {
//       $('#side-menu').css({ 'position': 'fixed', 'top': '70px' });
//       globeStopped = false;
//     }
//     // if in new section and not scrolling because of a sub-menu click, then update rotation
//     if (menuRotate !== degreeRotate && clicking === false) {
//       scrollPos = newScroll;
//       menuTransform(menuRotate, degreeRotate);
//       menuRotate = degreeRotate;
//     }
//     // if in a new section, update the active icon and idle icon hover effects
//     if (lastSectionCount !== sectionCount) {
//       if (topClicking === false) {
//         $('#menu' + lastSectionCount + ' .active').fadeOut('slow', function() {
//           if (clicking === false) {
//             if (sectionCount !== 4) {
//               $('#menu' + sectionCount + ' .active').fadeIn('slow');
//             }
//           }
//         });
//       }
//         // if (sectionCount!==0) {
//         //     $('#side-menu .menu-item').each(function() {
//         //         var active=$(this).children('.active').eq(0);
//         //         if (!active.is('#menu'+sectionCount+' .active')) {
//         //             $(this).hover(function() {
//         //                 active.fadeIn('fast');
//         //             },function() {
//         //                 active.fadeOut('fast');
//         //                 // checkPosition($(window).scrollTop(),globeStopped);
//         //             });
//         //         }
//         //     });
//         // }
//       lastSectionCount = sectionCount;
//     }
  });
});
