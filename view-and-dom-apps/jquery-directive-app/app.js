var app = angular.module("app", []);

app.directive("myWidget", function(){
  var linkFn = function(scope, element, attrs){
    var animateDown = function(){
      $(this).animate({
        top: '+=50'
      })
    }

    var animateRight = function(){
      $(this).animate({
        left: '+=50'
      })
    }

    $('#one').on('click', animateDown);
    $('#two').on('click', animateRight);
  };

  return {
    restrict: "E",
    link: linkFn,
  };
});
