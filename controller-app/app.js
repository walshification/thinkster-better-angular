var app = angular.module(
  'app',  // defines the name of the module
  []      // an array that declares any module dependencies
);

// Register the controller using the controller function on modules.
// app.controller(
//   'MainCtrl',         // defines the name of the controller
//   function ($scope){  // the function that defines our controller's behavior
//     // Parameters passed to the controller function are the dependencies that are
//     // injected into it.
//     $scope.message = 'hello';
// 
//     // functions can be created on the scope to manipulate data in the view
//     $scope.updateMessage = function (message){
//       $scope.message = message;
//     };
// });

// Using "controller as" syntax:
app.controller('MainCtrl', function (){  // $scope is no longer a dependency.
  // Create a reference to this so we don't lose context of our controller when we
  // create/call functions within our controller.
  var self = this;

  self.message = 'hello';

  self.updateMessage = function(message){
    self.message = message;
  };
});
