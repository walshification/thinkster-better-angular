angular.module('functionalities', [])
.directive("entering", function() {
  // Attribute directives are default if a restriction is not specified.
  // A linking function can be returned nothing else is being used.
  return function(scope, element) {
    element.bind("mouseenter", function(){
      console.log("Mouse has entered the div.");
    });
  }
})
.directive("leaving", function() {
  return function(scope, element) {
    element.bind("mouseleave", function(){
      console.log("Mouse has left the div.");
    });
  }
});
