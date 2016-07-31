var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/',
    {
      templateUrl: "app.html",
      controller: "AppController",
      controllerAs: "app",
    }
  );
});

app.controller("AppController", function(){
  var self = this;
  self.message = "The app routing is working!";
});
