var app = angular.module('app', ['ngAnimate']);

app.controller('TestCtrl', function TestCtrl() {
  var self = this;

  // toggling ngShow with Boolean state
  self.showBoxOne = false;
  self.showBoxTwo = false;

  self.toggleBoxOne = function(){
    self.showBoxOne = !self.showBoxOne;
  };

  // Add/remove items from a list and ngRepeat
  self.people = [
    { name: "Eric Simmons" },
    { name: "Alberta Pai" },
    { name: "Maria Greenster" },
  ];

  self.addPerson = function(){
    self.people.push({name:'Steve Jobs'});
  };

  self.removePerson = function(){
    self.people.pop();
  };

  // Changing style with ngClass
  self.bigger = false;
  self.lightTheme = false;

  self.toggleSize = function(){
    self.bigger = !self.bigger;
  };

  self.toggleTheme = function(){
    self.lightTheme = !self.lightTheme;
  };
});
