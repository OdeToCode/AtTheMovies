(function(){

	var module = angular.module("pristine", []);

	module.controller("mainController", function($scope){

        $scope.user = {
            firstName: "Scott",
            lastName: "Allen"
        };

        $scope.originalUser = angular.copy($scope.user);

        $scope.reset = function(){
            $scope.user = angular.copy($scope.originalUser);
            $scope.editUserForm.$setPristine();
        };

	});

}());