;(function(ng){
'use strict';
ng.module('MyApp').controller("verifCtrl",['$scope','$log','$routeParams','VerifDAO', function($scope,$log,$routeParams,VerifDAO)
{
	$scope.myFunc = function () {
		$scope.verif = "sent";
        $scope.veriff = $routeParams.id; 
	
	  //var x = new object;
	  var verifa = new Object;
	 // var y = x.verifa;
	  verifa.a = $scope.veriff;
		console.log(verifa);
		  VerifDAO
            .create(verifa)
            .then(function(results) {
              console.log("email is verified");

            })
            .catch($log.error);

	}

}]);
}(window.angular));