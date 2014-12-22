"use strict";
describe("array comprehensions", function() {
  it("can create arrays", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__0(start, end) {
      var i;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = start;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i <= end) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return i;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__0, this);
    });
  });
});
describe("generator comprehensions", function() {
  it("can create iterables", function() {
    var range = $traceurRuntime.initGeneratorFunction(function $__0(start, end) {
      var i;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              i = start;
              $ctx.state = 7;
              break;
            case 7:
              $ctx.state = (i <= end) ? 1 : -2;
              break;
            case 4:
              i++;
              $ctx.state = 7;
              break;
            case 1:
              $ctx.state = 2;
              return i;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__0, this);
    });
  });
});
