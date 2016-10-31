var express           = require('express'),
	nodemailer        = require("nodemailer"),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'), 
    Users = require('./server/models/user.js');
    //servercontroller  = require('./server/controllers/serverctrl');

mongoose.connect('mongodb://localhost:27017/pillayar');

app.use(bodyParser());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});
app.use('/js', express.static(__dirname + '/client/js'));

//app.post('/api/user',servercontroller.create);
app.post('/api/user',function(req,res)
	{   var user = new Users(req.body);
		var rand,mailOptions,host,link;
		console.log(req.body.email);
		rand=Math.floor((Math.random() * 100) + 54);
        host=req.get('host');
        link="http://localhost:3000/verify?id="+rand;
		mailOptions={
        to : req.body.email,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
		var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "snekhachandran@gmail.com",
        pass: "s8n8e0k7h4a81525"
    }
});

   
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
app.get('/verify',function(req,res){
	console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query.id==rand)
    {
        console.log("email is verified");
        res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
        user.save(function(results,err)
        {
            
            
            
                res.json(results);
            
        });
        
    }
    else
    {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
}
});
	
	});
app.listen(3000, function() {
  console.log('I\'m Listening...');
});