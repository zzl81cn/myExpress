'use strict';

module.exports = function (app) {
    /* index */
    const indexRouter = require('./routes/index');
    app.use('/', indexRouter);
    /* user */
    const userRouter = require('./routes/users');
    app.use('/user', userRouter);
    /* super contain superagent and cheeio */
    const superRouter = require('./routes/super');
    app.use('/super', superRouter);
};