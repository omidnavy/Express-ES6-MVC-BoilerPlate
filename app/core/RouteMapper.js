const express = require('express');
const path = require('path');
const fs = require('fs');

module.exports = class RouteMapper {

    constructor(app) {
        this.app = app;
        this.mapControllers()
    }

    mapControllers() {
        let Controller, router, urlPath, bindControllerRoutes;
        const self = this;
        router = express.Router();

        fs.readdirSync(path.join(__dirname, '../components')).forEach((component) => {
            Controller = require(path.join(__dirname, '../components', component, component + 'Controller'));
            (component === 'Index') ? urlPath = "/" : urlPath = component.toString().toLowerCase();
            self.app.use("/" + urlPath, router);
            bindControllerRoutes = new Controller(router);
        });
    }
};