"use strict";
(function(app) {
  var GameBoardController = function GameBoardController() {};
  ($traceurRuntime.createClass)(GameBoardController, {}, {});
  var gameBoardDirective = function() {
    return {
      restrict: "E",
      templateURL: "templates/gameboard.html"
    };
  };
  app.directive("gameBoard", gameBoardDirective);
}(angular.module("pong")));

//# sourceMappingURL=gameBoard.js.map
