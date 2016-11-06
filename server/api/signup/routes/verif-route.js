"use strict";

const signupController = require('../controller/signup-controller');

module.exports = class verifRoutes {
  static init(router) {
    router
      .route('/verify')
      //.get(signupController.getAll)
      .get(signupController.verif);

      
  }
}
