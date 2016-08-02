var app = angular.module("app", ['ngRoute', 'ngResource']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: "main.html",
      controller: "MainController",
      controllerAs: "main",
    }
  );
});

app.controller("MainController", function() {
  var self = this;

  self.message = "Hello, world!";
});
