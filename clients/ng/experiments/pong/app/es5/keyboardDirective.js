"use strict";
(function(app) {
  app.directive("keyboard", function($document, keyboardHandler) {
    return {
      restrict: "A",
      template: "<pre ng-show='showKeys'>{{key}}</pre>",
      link: function(scope) {
        scope.showKeys = app.config.showKeys;
        $document.on("keypress keydown keyup", function(e) {
          scope.$apply(function() {
            scope.key = e.which;
            return keyboardHandler.processKey(e);
          });
        });
      }
    };
  });
}(angular.module("pong")));

//# sourceMappingURL=keyboardDirective.js.map
