require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use('/estatico', express.static('src/app/public')); //Middeware, será executado sempre que eu receber uma requição no /estatico

//app é o objeto do express
app.use(bodyParser.urlencoded({ //definir o middware
    extended: true //habilitado a receber objetos complexos no formato json
}));
app.use(methodOverride(function (req, res) { //utilizado para alternar o method header (de post p/ put)
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  }));

const rotas = require('../app/rotas/rotas.js')
rotas(app);

//Mideware para retorno da pagina 404
app.use(function (req, resp, next) {
  return resp.status(404).marko(
    require ('../app/views/base/erros/404.marko')
  );
});

//Mideware para retorno da pagina 500
app.use(function (erro, req, resp, next) {
  return resp.status(500).marko(
    require ('../app/views/base/erros/500.marko')
  );
});

module.exports  = app;