var rand,mailOptions,host,link;
var user = new Users(req.body);

		

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
}
   module.exports.verify=function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query.id==rand)
    {
        console.log("email is verified");
        res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
        user.save(function(err,results)
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
};
	