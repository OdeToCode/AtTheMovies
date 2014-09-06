(function(app) {

    class GameBoardController {

    }

    var gameBoardDirective = function(){
      return {
        restrict: "E",
        templateUrl: "templates/gameBoard.html"
      }
    };

    app.directive("gameboard", gameBoardDirective);
    app.controller("GameBoardController", GameBoardController);

}(angular.module("pong")));