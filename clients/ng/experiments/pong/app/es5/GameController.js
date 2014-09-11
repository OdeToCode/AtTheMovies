"use strict";
(function(app) {
  var GameController = function GameController() {
    this.config = app.config;
  };
  ($traceurRuntime.createClass)(GameController, {}, {});
  app.controller("GameController", GameController);
}(angular.module("pong")));

//# sourceMappingURL=GameController.js.map
