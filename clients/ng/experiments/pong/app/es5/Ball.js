"use strict";
(function(app) {
  var Ball = function Ball(x, y) {
    this.x = x;
    this.y = y;
  };
  ($traceurRuntime.createClass)(Ball, {}, {});
  app.value("ball", new Ball(300, 400));
}(angular.module("pong")));

//# sourceMappingURL=Ball.js.map
