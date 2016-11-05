"use strict";

const signup = require('../dao/signup-dao');

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
   //dao.create(_signup)
      //.then(signupres => console.log("DAO"+signupres))
      //.catch(error => res.status(400).json(error));
      
   signup
      .createNew(_signup)
      .then(signup => res.status(201).json(signup))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req, res) {
    let _id = req.params.id;

    signupDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
