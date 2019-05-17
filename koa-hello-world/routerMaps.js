const Router = require('koa-router');
const router = new Router();

const index = require('./routes/index');
const about = require('./routes/about');

router.use('/', index.routes(), index.allowedMethods());
router.use('/about', about.routes(), about.allowedMethods());

module.exports = router;
