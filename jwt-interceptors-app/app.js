function authInterceptor(API, auth) {
  return {
    // automatically attach the Authorization header
    request: function(config) {
      var token = auth.getToken();
      if(config.url.indexOf(API) === 0 && token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    // if a token was sent back, save it
    response: function(resp) {
      if(resp.config.url.indexOf(API) === 0 && resp.data.token) {
        auth.saveToken(resp.data.token);
      }
      return resp;
    }
  }
}

function authService($window) {
  var self = this;

  self.parseJwt = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  }

  self.saveToken = function(token) {
    $window.localStorage['jwtToken'] = token;
  }

  self.getToken = function() {
    return $window.localStorage['jwtToken'];
  }

  self.isAuthed = function() {
    var token = self.getToken();
    if(token) {
      var params = self.parseJwt(token);
      return Math.round(new Date().getTime() / 1000) <= params.exp;
    } else {
      return false;
    }
  }

  self.logout = function() {
    $window.localStorage.removeItem('jwtToken');
  }
}

function userService($http, API, auth) {
  var self = this;
  self.getQuote = function() {
    return $http.get(API + '/auth/quote')
  }

  self.register = function(username, password) {
    return $http.post(API + '/auth/register', {
      username: username,
      password: password
    })
  }
  self.login = function(username, password) {
    return $http.post(API + '/auth/login', {
      username: username,
      password: password
    })
  };
}

angular.module('app', ['ngRoute'])
.factory('authInterceptor', authInterceptor)
.service('user', userService)
.service('auth', authService)
.constant('API', 'http://test-routes.herokuapp.com')
.config(function($routeProvider, $httpProvider){
  $routeProvider.when('/',
    {
      templateUrl: "main.html",
      controller: "MainController",
      controllerAs: "main",
    }
  );

  $httpProvider.interceptors.push('authInterceptor');
})
.controller('MainController', ['user', 'auth', function(user, auth) {
  var self = this;

  function handleRequest(resp) {
    var token = resp.data ? resp.data.token : null;
    if(token) { console.log('JWT:', token); }
    self.message = resp.data.message;
  }

  self.login = function() {
    user.login(self.username, self.password)
      .then(handleRequest, handleRequest);
  }

  self.register = function() {
    user.register(self.username, self.password)
      .then(handleRequest, handleRequest);
  }

  self.getQuote = function() {
    user.getQuote()
      .then(handleRequest, handleRequest);
  }

  self.logout = function() {
    auth.logout && auth.logout();
  }

  self.isAuthed = function() {
    return auth.isAuthed ? auth.isAuthed() : false;
  }
}]);
