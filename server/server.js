'use strict';

if (process.env.NODE_ENV === 'production')
    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const http = require('http');
const express = require('express');
const RoutesConfig = require('./config/routes.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const SignupRoutes = require('./signuproutes/index');
//const verifRoutes = require('./verifroutes/index');


const app = express();

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());
SignupRoutes.init(app, express.Router());
//verifRoutes.init(app, express.Router());
console.log("from server.js");

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
