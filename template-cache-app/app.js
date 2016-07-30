var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'TestController as test',
    templateUrl: 'test.html',
  })
  .otherwise('/');
});

app.controller('TestController', function($templateCache){
  var self = this;

  self.user = { name: 'Chris' };

  console.log($templateCache.get('test.html'));
});
