"use strict";
(function(app) {
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[$traceurRuntime.toProperty(vendors[$traceurRuntime.toProperty(x)] + 'RequestAnimationFrame')];
    window.cancelAnimationFrame = window[$traceurRuntime.toProperty(vendors[$traceurRuntime.toProperty(x)] + 'CancelAnimationFrame')] || window[$traceurRuntime.toProperty(vendors[$traceurRuntime.toProperty(x)] + 'CancelRequestAnimationFrame')];
  }
  var RafService = function RafService() {};
  ($traceurRuntime.createClass)(RafService, {}, {});
  app.service("raf", RafService);
}(angular.module("pong")));

//# sourceMappingURL=rafService.js.map
