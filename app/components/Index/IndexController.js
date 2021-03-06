const BaseController = require('../../core/BaseController');

module.exports = class IndexController extends BaseController {

    constructor(router) {
        super();
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes() {
        this.router.get('/', this.getHome.bind(this));
    }

    getHome(req, res) {
        this.renderView(res, __dirname, 'index')
    }


};

