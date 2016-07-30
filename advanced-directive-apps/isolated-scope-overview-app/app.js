var app = angular.module('phoneApp', []);

app.controller('PhoneController', function($scope){
  $scope.leaveVoicemail = function(number, message){
    alert('Number: ' + number + ' said: ' + message);
  };
});

app.directive('phone', function(){
  return {
    restrict: 'E',
    scope: {
      number: '@',  // numbers can be read and isolated from other phone directives
      network: '=',  // two-way binding that updates the controller
      makeCall: '&',  // call a funciton isolated from other directives' values
    },
    templateUrl: 'phone.html',  // store the directive template elsewhere
    link: function(scope){
      scope.networks = ['Verizon', 'AT&T', 'Sprint'];
      scope.network = scope.networks[0];
    }
  };
});
