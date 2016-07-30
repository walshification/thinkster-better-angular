var app = angular.module("app", []);

// expose $log to $rootScope without using a controller
app.run(function($rootScope, $log){
  // access $log anywhere within the app
  $rootScope.$log = $log;
});
