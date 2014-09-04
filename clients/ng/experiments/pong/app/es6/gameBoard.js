(function(app){

    class GameBoardController {

    }

    var gameBoardDirective = function(){
      return {
        restrict: "E",
        templateURL: "templates/gameboard.html"
      }
    };

    app.directive("gameBoard", gameBoardDirective);

}(angular.module("pong")));