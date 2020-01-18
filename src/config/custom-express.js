require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//app é o objeto do express
app.use(bodyParser.urlencoded({ //definir o middware
    extended: true //habilitado a receber objetos complexos no formato json
}));

const rotas = require('../app/rotas/rotas.js')
rotas(app);

module.exports  = app;