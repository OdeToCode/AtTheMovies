"use strict";
(function(app) {
  var GameController = function GameController(ball, leftPaddle, rightPaddle) {
    this.config = app.config;
    this.ball = ball;
    this.leftPaddle = leftPaddle;
    this.rightPaddle = rightPaddle;
  };
  ($traceurRuntime.createClass)(GameController, {}, {});
  app.controller("Game", GameController);
}(angular.module("pong")));

//# sourceMappingURL=GameController.js.map
