(function(){

    var module = angular.module("app", []);

    var MainController = function() {
  		
  		this.message = "Hello";
  		
    };

    MainController.prototype = {
    	
    	changeMessage: function() {
            this.message = "Bonjour!";
        },

        isMainController: function(object) {
        	return object instanceof MainController;
        },

        isObject: function(object) {
        	return object instanceof Object;
        }

    };

    module.controller("MainController", MainController);

}());
