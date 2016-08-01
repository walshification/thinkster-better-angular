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

  this.upperCase = function(data) {
    return $http.post('http://test-routes.herokuapp.com/test/uppercase', data)
  }
}

function TestController($scope, testService) {
  var self = this;
  self.message = "";
  self.sendMessage = "";
  self.upperCaseMessage = "";
  getMessage();

  function getMessage() {
    testService.get()
      .then(function(message) {
        self.message = message;
      })
  }

  self.postData = function(message) {
    testService.upperCase({message: message})
      .then(function(body) {
        console.log("success: ", body.data.message);
        self.upperCaseMessage = body.data.message;
      }, function(error) {
        console.log("error: ", error);
      })
  }
}

app
.service('testService', testService)
.controller('TestController', TestController)
