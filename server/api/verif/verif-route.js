"use strict";

const a = require('../signup/controller/signup-controller');
console.log("from verif-route.js");
module.exports = class verifRoutes {
  static init(router) {
    router
      .route('/api/verif')
      //.get(signupController.getAll)
      .post(a.verif);

      
  }
}
