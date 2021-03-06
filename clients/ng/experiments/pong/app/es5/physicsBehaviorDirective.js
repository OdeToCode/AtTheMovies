"use strict";
(function(app) {
  app.directive("physicsBehavior", function(Physics, world) {
    return {
      restrict: "E",
      scope: {name: "@"},
      link: function(scope) {
        world.add(Physics.behavior(scope.name));
      }
    };
  });
}(angular.module("pong")));

//# sourceMappingURL=physicsBehaviorDirective.js.map
