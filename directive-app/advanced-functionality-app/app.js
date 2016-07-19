angular.module('functionalities', [])
// .directive("entering", function() {
//   return function(scope, element) {
//     element.bind("mouseenter", function(){
//       element.addClass("activeClass");  // Add a class on an event.
//     });
//   }
// })
// .directive("leaving", function() {
//   return function(scope, element) {
//     element.bind("mouseleave", function(){
//       element.removeClass("activeClass");  // Remove a class on an event.
//     });
//   }
// });
.directive("entering", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      // Adds the attribute on the element with the directive as a class.
      element.addClass(attrs.entering);
    });
  }
})
.directive("leaving", function() {
  return function(scope, element, attrs) {
    element.bind("mouseleave", function() {
      // Removes the attribute on the element with the directive as a class.
      element.removeClass(attrs.entering);
    });
  }
})
// attrs is a DOM-normalized key/value store for all attributes in the DOM element.
