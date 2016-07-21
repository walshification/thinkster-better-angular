var app = angular.module('app', []);

app.directive('tab', function() {
  return {
    restrict: 'E',  // tab directive is an element.
    transclude: true,
    // template specifies html string that should be inserted whenever the
    // directive is used.
    template: '<div role="tabpanel" ng-show="active" ng-transclude></div>',
    // Defines the scope to be used in the directive.  Defining an object creates
    // an isolated scope with properties available only in the directive scope.
    scope: {
      heading: '@'
    },
    require: '^tabset',
    // Specifies the linking function to house most of the directive's functionality.
    link: function(scope, elem, attr, tabsetCtrl) {
      // scope: Similar to $scope. Values attached are available in the template.
      // elem: The actual HTML element wrapped as a jqLite, used to change the DOM.
      // attr: Normalized object of all HTML properties on the directive element.
      scope.active = false;

      scope.disabled = false;
      if(attr.disable) {
        attr.$observe('disable', function(value) {
          scope.disabled = (value !== 'false');
        })
      }

      tabsetCtrl.addTab(scope);
    },
  }
});

app.directive('tabset', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    templateUrl: 'tabset.html',  // as opposed to a template string.
    bindToController: true,  // automatically bind properties to `this`.
    controllerAs: 'tabset',  // defines a ctrl object to bind properties to directly.
    controller: function() {
      // Specify the controller used as opposed to a link.
      var self = this;
      self.tabs = [];

      self.addTab = function addTab(tab) {
        self.tabs.push(tab);

        if(self.tabs.length === 1) {
          tab.active = true;
        }
      };

      self.select = function(selectedTab) {
        if(selectedTab.disabled) { return }
        angular.forEach(self.tabs, function(tab) {
          if(tab.active && tab !== selectedTab) {
            tab.active = false;
          }
        });

        selectedTab.active = true;
      };
    }
  }
});
