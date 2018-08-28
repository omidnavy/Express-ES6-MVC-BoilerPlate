const express = require('express');
const http = require('http');
const RouteMapper = require('./core/RouteMapper');
const Middleware = require('./core/Middleware');
const path = require('path');
require('./helpers/helpers.js');

let app = express();
let server = http.createServer(app);

/**
 * MIDDLEWARE
 ********************* */
new Middleware(app, express);

/**
 * ROUTES
 ********************* */
new RouteMapper(app);

/**
 * Default Routes
 ********************* */
app.use((req, res, next) => {
    res.status(404).send('Not found')
});

server.listen(8080);
logger('info','Server started on localhost:8080');
process.on('uncaughtException', function (err) {
    logger('error',err);
});