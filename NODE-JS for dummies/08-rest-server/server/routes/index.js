const express = require('express');

const app = express();

//De esta forma utilizamos los controladores de GET POST PUT DELETE
app.use(require('./user'));
app.use(require('./login'));
app.use(require('./category'));

module.exports = app;