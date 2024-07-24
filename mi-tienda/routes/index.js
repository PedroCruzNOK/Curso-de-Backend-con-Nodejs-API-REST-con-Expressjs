const productosRouter = require('./productos.router');

function routerApi(app){
  app.use('/productos', productosRouter);
}

module.exports = routerApi;
