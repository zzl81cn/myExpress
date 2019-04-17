'use strict';

module.exports = function (app) {
    /* index */
    const indexRouter = require('./routes/index');
    app.use('/', indexRouter);

    const userRouter = require('./routes/users');
    app.use('/', userRouter);

};