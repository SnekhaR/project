app.controller("myCtrl",['$scope','$resource', function($scope,$resource) {
 $scope.user = [{firstname:"",lastname:"",email:"",username:"",password:""}];
 var Users = $resource('/api/user');
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


var express           = require('express'),
  nodemailer        = require("nodemailer"),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'), 
    servercontroller  = require('./server/controllers/serverctrl');

mongoose.connect('mongodb://localhost:27017/pillayar');

app.use(bodyParser());


var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "snekhachandran@gmail.com",
        pass: "s8n8e0k7h4a81525"
    }
});
var rand,mailOptions,host,link;
app.get('/send',function(req,res){
  console.log(req.body);
        rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?id="+rand;
    mailOptions={
        to : req.query.to,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        
     }else{
            console.log("Message sent: " + response.message);
        
         }
});
});
app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query.id==rand)
    {
        console.log("email is verified");
        //res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
    }
    else
    {
        console.log("email is not verified");
        //res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
}
});



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));
//app.post('/api/user', servercontroller.create);
app.listen(3000, function() {
  console.log('I\'m Listening...');
})