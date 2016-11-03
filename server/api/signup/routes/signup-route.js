"use strict";

const signupController = require('../controller/signup-controller');

module.exports = class signupRoutes {
  static init(router) {
    router
      .route('/api/signup')
      //.get(signupController.getAll)
      .post(signupController.create);

    //router
      //.route('/api/signup/:id')
      //.delete(signupController.removeById);
  }
}
