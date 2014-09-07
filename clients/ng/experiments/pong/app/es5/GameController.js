"use strict";
(function(app) {
  var GameController = function GameController(Paddle, raf) {
    this.leftPaddle = new Paddle();
    this.rightPaddle = new Paddle();
  };
  ($traceurRuntime.createClass)(GameController, {}, {});
  app.controller("GameController", GameController);
}(angular.module("pong")));

//# sourceMappingURL=GameController.js.map
