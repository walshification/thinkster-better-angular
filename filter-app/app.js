var filterApp = angular.module('app', []);

filterApp.filter(  // filter method on the module interface.
  // Defines a filter 'capitalize' to invoke the filter function.
  'capitalize',
  // The actual filter function.
  function(){
    // This is the function Angular will execute when the expression is evaluated.
    return function (text) {
      // text is the original string output of the Angular expression.
      return text.toUpperCase();
      // and we simply return the text in uppercase.
    };
  }
);

filterApp.controller('FilterCtrl', function(){
  var self = this;

  // Initialize the controller with default information.
  self.people = [
    {
      name: "eric simons",
      born: "Chicago",
    },
    {
      name: "albert pai",
      born: "Taiwan",
    },
    {
      name: "matthew greenster",
      born: "Virginia",
    },
  ];
});
