"use strict";

//const mongoose = require('mongoose');
const Promise = require('bluebird');
//const todoSchema = require('../model/todo-model');
const _ = require('lodash');
var express           = require('express'),
    nodemailer        = require("nodemailer"),
    app               = express(),
    bodyParser        = require('body-parser');
var rand,mailOptions,host,link;
rand=Math.floor((Math.random() * 100) + 54);
link="http://localhost:3000/verify?id="+rand;


module.exports = class SignupVerify {
static verify(req,res) {
      let _signup = req.body; 
      
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
      //let _todo = new Todo(todo);

      //_todo.save((err, saved) => {
        //err ? reject(err)
          //  : resolve(saved);
      };
   }


