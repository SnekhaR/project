"use strict";

const verifRoutes = require('../api/signup/routes/verif-route');

const StaticDispatcher = require('../commons/static/index'); 


module.exports = class Routes {
   static init(app, router) {
     verifRoutes.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
}

