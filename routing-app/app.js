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
  .when('/cookies/:cookieType',
    {
      redirectTo: function(routeParams, path, search){
        return "/" + routeParams.cookieType
      }
    }
  )
  .when('/sugar',
    {
      template: 'Sugar cookies are the best!'
    }
  )
  .when('/:firstName/:middleName/:lastName',
    {
      templateUrl: "app.html",
      controller: "AppController",
      controllerAs: "app",
    }
  )
  .when('/promise',
    {
      templateUrl: "app.html",
      controller: "AppController",
      controllerAs: "app",
      resolve: {
        loadData: appCtrl.loadData,
        prepData: appCtrl.prepData,
      }
    }
  )
  .otherwise({
    redirectTo: function(routeParams, path, search){
      console.log("Route Parameters: " + JSON.stringify(routeParams));
      console.log("Request Path: " + path);
      console.log("Query String: " + JSON.stringify(search));
      return "/"
    }
  });
});

var appCtrl = app.controller("AppController", function($routeParams, $route){
  var self = this;
  console.log($route);

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

appCtrl.loadData = function($q, $timeout){
  var defer = $q.defer();
  $timeout(function(){
    defer.resolve('loadData');
    console.log("loadData");
  }, 5000);
  return defer.promise;
};

appCtrl.prepData = function($q, $timeout){
  var defer = $q.defer();
  $timeout(function(){
    defer.resolve('prepData');
    console.log("prepData");
  }, 5000);
  return defer.promise;
};
