"use strict";

//const signup = require('../dao/signup-dao');
//const SignupVerify = require('../verify/signup-verify');
var nodemailer        = require("nodemailer"),
    express           = require('express'),
    app               = express();
var rand,mailOptions,host,link;
rand=Math.floor((Math.random() * 100) + 54);
link="http://localhost:3000/verify?id="+rand;


module.exports = class signupController {
  static getAll(req, res) {
    signupDAO
      .getAll()
      .then(signup => res.status(200).json(signup))
      .catch(error => res.status(400).json(error));
  }

  static create(req, res) {
    let _signup = req.body;
   console.log(_signup);
   console.log("server controller");
   host=req.get('host');
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
    //SignupVerify.verify(_signup);
   //dao.create(_signup)
      //.then(signupres => console.log("DAO"+signupres))
      //.catch(error => res.status(400).json(error));
      
   //signup
      //.createNew(_signup)
      //.then(signup => res.status(201).json(signup))
      //.catch(error => res.status(400).json(error));
  static verif(req,res){
    console.log('frm /verify get');
    res.end("<h1>email is verified</h1>");
  }

  static removeById(req, res) {
    let _id = req.params.id;

    signupDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
