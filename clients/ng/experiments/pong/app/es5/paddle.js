"use strict";
(function(app) {
  var Paddle = function Paddle(x, y) {
    this.x = x;
    this.y = y;
  };
  ($traceurRuntime.createClass)(Paddle, {}, {});
  app.value("leftPaddle", new Paddle(100, 100));
  app.value("rightPaddle", new Paddle(900, 300));
}(angular.module("pong")));

//# sourceMappingURL=Paddle.js.map
