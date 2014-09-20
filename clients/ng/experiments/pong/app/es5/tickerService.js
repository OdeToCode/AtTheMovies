"use strict";
(function(app) {
  var Ticker = function Ticker(Physics, world) {
    this.Physics = Physics;
    this.world = world;
  };
  ($traceurRuntime.createClass)(Ticker, {start: function() {
      this.Physics.util.ticker.on(function(time) {
        this.world.step(time);
      });
      this.Physics.util.ticker.start();
    }}, {});
  app.service("ticker", Ticker);
}(angular.module("pong")));

//# sourceMappingURL=tickerService.js.map
