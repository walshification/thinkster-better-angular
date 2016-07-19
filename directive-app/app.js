angular.module('greetings', [])
// directiveApp.directive('welcome', function() {
//   return {
//     restrict: "E",  // Creates a custom element directive.
//     template: "<div>Howdy there! You look splendid.</div>"
//   }
// });
.directive("welcome", function() {
  return {
    restrict: "A",  // Creates a custom attribute directive.
    link: function() {  // Linking behavior is what the custom attribute does.
      alert("Howdy!");
    }
  }
})
// Typically it's best to add behaviors in attributes so you can stack them.
.directive("goodbye", function() {
  return {
    restrict: "A",  // Attribute directives are the default if not specified.
    link: function() {
      alert("See ya later!");
    }
  }
});

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
