const path = require('path')
module.exports = class BaseController {
    renderView(response, viewPath,viewName, data = {}) {
        response.render(path.join( viewPath ,'/views/',viewName ), data);
    }

};