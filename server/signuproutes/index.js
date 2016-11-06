"use strict";

const SignupRoutes = require('../api/signup/routes/signup-route');

const StaticDispatcher = require('../commons/static/index'); 


module.exports = class Routes {
   static init(app, router) {
     SignupRoutes.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
}

