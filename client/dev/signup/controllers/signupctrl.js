
;(function(ng){
'use strict';
ng.module('MyApp').controller("myCtrl",['$scope','$resource','$log',
      'SignupDAO',function($scope,$resource,$log,SignupDAO) {
 $scope.user = [{firstname:"",lastname:"",email:"",username:"",password:""}];
var Users = $resource('/api/users');
 //var Email = $resource('/api/email');
  $scope.myFunc = function () {

          $scope.regi="submitted";
          var self = this;

          var x = new Object();
          x.firstname = $scope.fname;
          x.lastname = $scope.lname;
          x.email = $scope.aemail;
          x.username = $scope.uname;
          x.password = $scope.apassword;
        console.log(x);
          SignupDAO
            .create(x)
            .then(function(results) {
              self.user.push(results);

            })
            .catch($log.error);

          //console.log("this is snekha clientController");
         // x.$save(function(results)
     // {

       // $scope.user.push(results);
          //  if (results == "error")
            //{
              //$scope.display="Error!"
            //}

      $scope.myTxt = "request for " + $scope.fname ;

      $scope.fname="";
      $scope.lname="";
      $scope.aemail="";
      $scope.uname="";
      $scope.apassword="";
    }


}]);
}(window.angular));
