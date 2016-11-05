"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const signupSchema = require('../model/signup-model');
const SignupVerify = require('../verify/signup-verify');
const _ = require('lodash');

signupSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    signup
      .find(_query)
      .exec((err, todos) => {
        err ? reject(err)
          : resolve(todos);
      });
  });
}

signupSchema.statics.createNew = (signup) => {
	console.log("in 1st dao");
  return new Promise((resolve, reject) => {
//    if (!_.isObject(signup)) {
  //    return reject(new TypeError('Todo is not a valid object.'));
  //  }
       signupVerify.verify(signup);
	console.log("2nd dao");
	console.log(signup);
    let _something = new Signup(signup);
   console.log("server dao");
   console.log(_something);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

signupSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    signup
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

const signup = mongoose.model('signup', signupSchema);

module.exports = signup;
