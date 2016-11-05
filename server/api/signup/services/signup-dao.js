"use strict";
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promise = require('bluebird');
const signupSchema = require('../model/signup-model');
const _ = require('lodash');

 module.exports.create = function(req,res){
	console.log("DAO");
	console.log(req.body);
	var user = new signupSchema(req.body);

	 user.save(function(err,results)
        {
		if(err)
   		{
		console.log(error);
		}
            
            
            
                res.json(results);
            
        });
    }

