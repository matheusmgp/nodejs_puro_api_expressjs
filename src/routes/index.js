const { Router } = require('express');
const { productsRoutes } = require('./products.routes');
const { userRoutes } = require('./users.routes');
const routes = Router();

routes.use(userRoutes);
routes.use(productsRoutes);

module.exports = routes;
