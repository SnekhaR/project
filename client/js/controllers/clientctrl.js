app.controller("myCtrl",['$scope','$resource', function($scope,$resource) {
 $scope.user = [{firstname:"",lastname:"",email:"",username:"",password:""}];
 var Users = $resource('/api/user');
 var Email = $resource('/api/email');
  $scope.myFunc = function () {
      var y = new Email();
      y.email = $scope.aemail;
      y.$save(function(data){
        if(data)
        {
            $.mmm="email verified"
        }
      });
    }
  }]);

  	  var x = new Users();
  	  x.firstname = $scope.fname;
  	  x.lastname = $scope.lname;
  	  x.email = $scope.aemail;
  	  x.username = $scope.uname;
  	  x.password = $scope.apassword;
  	  //x.$save(function(results)
  	 