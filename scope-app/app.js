var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: "main.html",
      controller: "MainController",
      controllerAs: "main",
    }
  );
});

app.controller("MainController", function($scope) {
  var self = this;

  console.log($scope);
  self.message = "Hello, world!";
});

app.directive('testDirective', function() {
  return {
    scope: {},
    link: function(scope) {
      console.log(scope);
    }
  }
});
