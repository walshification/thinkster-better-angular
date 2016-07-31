var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',
    {
      templateUrl: "app.html",
      controller: "AppController",
      controllerAs: "app",
    }
  )
  .when('/cookies',
    {
      template: "NOM NOM NOM NOM NOM"
    }
  )
  .otherwise(
    {
      template: "This route isn't set yet!"
    }
  );
});

app.controller("AppController", function(){
  var self = this;
  self.message = "The app routing is working!";
});
