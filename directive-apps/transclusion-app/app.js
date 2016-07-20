angular.module('greetings', [])
.directive("welcome", function() {
  return {
    restrict: "E",
    scope: {},
    transclude: true,  // Enable transclusion.
    template: "<div>This is the welcome component</div>"
  }
});
