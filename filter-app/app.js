var filterApp = angular.module('app', []);

filterApp.controller('FilterCtrl', function(){
  var self = this;

  self.people = [
    {
      name: "Eric Simons",
      born: "Chicago",
    },
    {
      name: "Albert Pai",
      born: "Taiwan",
    },
    {
      name: "Matthew Greenster",
      born: "Virginia",
    },
  ];
});
