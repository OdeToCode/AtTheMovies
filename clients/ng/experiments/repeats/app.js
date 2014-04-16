(function(){

	var module = angular.module("repeats", []);

	module.controller("mainController", function($scope){
		$scope.items = [
			{ title: "Item 1", order:1 },
			{ title: "Item 2", order:2 },
			{ title: "Item 3", order:3 },
			{ title: "Item 4", order:4 },
			{ title: "Item 5", order:5 },
		];

		var move = function (origin, destination) {
		    var temp = $scope.items[destination];
		    $scope.items[destination] = $scope.items[origin];
		    $scope.items[origin] = temp;
		};

		$scope.moveUp = function(index){			
			move(index, index - 1);
		};

		$scope.moveDown = function(index){					
			move(index, index + 1);
		};

	});

}());