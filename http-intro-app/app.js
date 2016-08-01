var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/',
    {
      templateUrl: "test.html",
      controller: "TestController",
      controllerAs: "test",
    }
  );
});

function testService($http) {
  this.get = function() {
    return $http.get('http://test-routes.herokuapp.com/test/hello')
      .then(function(resp) {
        return resp.data.message;
      })
  }
}

function TestController($scope, testService) {
  var self = this;
  getMessage();

  function getMessage() {
    testService.get()
      .then(function(message) {
        self.message = message;
      })
  }
}

app
.service('testService', testService)
.controller('TestController', TestController)
