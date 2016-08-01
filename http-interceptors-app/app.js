var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $routeProvider.when('/',
    {
      templateUrl: "test.html",
      controller: "TestController",
      controllerAs: "test",
    }
  );

  $httpProvider.interceptors.push('testInterceptors');
});

app.factory("testInterceptors", function() {
  return {
    request: function(config) {
      if(config.url.indexOf('http://test-routes.herokuapp.com') > -1) {
        config.headers['x-csrf-token'] = 'lalalalala';
      }
      return config;
    },
    requestError: function(config) {
      return config;
    },
    response: function(resp) {
      return resp;
    },
    responseError: function(resp) {
      return resp;
    }
  }
});

app.controller("TestController", function() {
  var self = this;

  self.message = "Hello, world!";
});

app.run(function($http) {
  $http.get('http://test-routes.herokuapp.com/test/hello')
    .then(function(resp) {
      console.log(resp.data.message);
    })
 });
