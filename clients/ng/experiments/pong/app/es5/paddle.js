"use strict";
(function(app) {
  var Paddle = function Paddle() {
    this.x = 0;
    this.y = 0;
  };
  ($traceurRuntime.createClass)(Paddle, {
    startMoveDown: function() {
      this.y += 2;
    },
    stopMoveDown: function() {
      this.y -= 1;
    },
    startMoveUp: function() {
      this.y -= 2;
    },
    stopMoveUp: function() {
      this.y += 1;
    }
  }, {});
  var LeftPaddle = function LeftPaddle(keyboardHandler) {
    var $__0 = this;
    Paddle.call(this);
    this.x = 25;
    this.y = 100;
    keyboardHandler.registerUpDown(38, (function() {
      return $__0.startMoveUp();
    }), this.stopMoveUp());
    keyboardHandler.registerUpDown(40, (function() {
      return $__0.startMoveDown();
    }), this.stopMoveDown());
  };
  ($traceurRuntime.createClass)(LeftPaddle, {}, {}, Paddle);
  var RightPaddle = function RightPaddle() {
    Paddle.call(this);
    this.x = 975;
    this.y = 300;
  };
  ($traceurRuntime.createClass)(RightPaddle, {}, {}, Paddle);
  app.service("leftPaddle", LeftPaddle);
  app.service("rightPaddle", RightPaddle);
}(angular.module("pong")));

//# sourceMappingURL=Paddle.js.map
