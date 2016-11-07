"use strict";

const verifRoutes = require('../api/verif/verif-route');

const StaticDispatcher = require('../commons/static/index'); 

console.log("from verifroutes");
module.exports = class Routes {
   static init(app, router) {
     verifRoutes.init(router);
     
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);
     

     app.use('/', router);
   }
}

