(function(app){
	
	app.directive("keyboard", function($document){
		return {
			restrict: "A",
			template: "<pre>{{key|json}}</pre>",
			link: function(scope){
				$document.on("keypress keydown keyup", function(e) {
					scope.key = e;
					console.log(e);
					console.log(scope);
				});
			}
		};
	});

}(angular.module("pong")));