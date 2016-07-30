var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'TestController as test',
    template: 'Hello {{ test.user.name }}!',
  })
  .otherwise('/');
});

app.controller('TestController', function(){
  var self = this;

  self.user = { name: 'Chris' };
});
