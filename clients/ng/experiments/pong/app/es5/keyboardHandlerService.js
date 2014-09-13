"use strict";
(function(app) {
  var keyMap = {};
  var KeyboardHandler = function KeyboardHandler(leftPaddle) {
    this.leftPaddle = leftPaddle;
  };
  ($traceurRuntime.createClass)(KeyboardHandler, {processKey: function(keyEvent) {
      return false;
    }}, {});
  app.service("keyboardHandler", KeyboardHandler);
}(angular.module("pong")));

//# sourceMappingURL=keyboardHandlerService.js.map
