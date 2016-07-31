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
  .when('/:firstName/:middleName/:lastName',
    {
      templateUrl: "app.html",
      controller: "AppController",
      controllerAs: "app",
    }
  )
  .otherwise(
    {
      template: "This route isn't set yet!"
    }
  );
});

app.controller("AppController", function($routeParams){
  var self = this;

  function capitalize(name){
    return name[0].toUpperCase() + name.slice(1)
  };

  if($routeParams.firstName){
    var firstName = capitalize($routeParams.firstName);
    var middleName = capitalize($routeParams.middleName);
    var lastName = capitalize($routeParams.lastName);

    self.message = "Welcome, " + firstName + " " + middleName + " " + lastName
  } else {
    self.message = "The app routing is working!";
  };
});
