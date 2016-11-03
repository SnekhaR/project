"use strict";

const mongoose = require('mongoose');

const _signupSchema = {firstname: String,lastname: String,email: String  ,username: String,password: String
  
}

module.exports = mongoose.Schema(_signupSchema);
