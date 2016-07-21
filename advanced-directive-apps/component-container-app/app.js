var advancedDirectiveApp = angular.module("app", []);

advancedDirectiveApp.directive("clock", function () {
  // example of a component, i.e. uncomplicated behavior
  return {
    restrict: "E",
    scope: {
      timezone: "@",
    },
    template: "<div>12:00pm {{ timezone }}</div>"
  };
});

advancedDirectiveApp.directive("panel", function () {
  // example of a container.
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@",
    },
    template: "<div style='border: 3px solid #000000'>" +
              "<div class='alert-box'>{{ title }}</div>" +
              "<div ng-transclude></div></div>"
  };
});
