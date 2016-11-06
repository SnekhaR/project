;(function(ng){
'use strict';
ng.module('MyApp').controller("verifCtrl",['$scope','$resource','$log', function($scope,$resource,$log)
{
	$scope.myFunc = function () {
		$scope.verif = "sent";
		var verifa = window.location.href;
		console.log(verifa);
	}

}]);
}(window.angular));