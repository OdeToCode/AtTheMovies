(function(){

	var module = angular.module("repeats", []);

	module.controller("main", function($scope){
		$scope.items = [
			{ title: "Item 1", order:1 },
			{ title: "Item 2", order:2 },
			{ title: "Item 3", order:3 },
			{ title: "Item 4", order:4 },
			{ title: "Item 5", order:5 },
		];

		var move = function(origin, destination){
			var item1 = $scope.items[destination];
			var item2 = $scope.items[origin];
			$scope.items[destination] = item2;
			$scope.items[origin] = item1;	
		};

		$scope.moveUp = function(index){			
			destinationIndex = index - 1;			
			move(index, destinationIndex);
		};

		$scope.moveDown = function(index){			
			destinationIndex = index + 1;			
			move(index, destinationIndex);
		};

	});

}());