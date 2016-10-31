app.controller("myCtrl",['$scope','$resource', function($scope,$resource) {
 $scope.user = [{firstname:"",lastname:"",email:"",username:"",password:""}];
 var Users = $resource('/api/user');
 //var Email = $resource('/api/email');
  $scope.myFunc = function () {
     

  	  var x = new Users();
  	  x.firstname = $scope.fname;
  	  x.lastname = $scope.lname;
  	  x.email = $scope.aemail;
  	  x.username = $scope.uname;
  	  x.password = $scope.apassword;
  	  x.$save(function(results)
      { 
      
        $scope.user.push(results);
            if (results == "error")
            {
              $scope.display="Error!"
            }
      
      $scope.myTxt = "request for " + $scope.fname ;
        
      $scope.fname="";
      $scope.lname="";
      $scope.aemail="";
      $scope.uname="";
      $scope.apassword="";
    });
    }

}]);

  	 