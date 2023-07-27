const { Router } = require('express');
const ProductController = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const routes = Router();

routes.get('/products', authMiddleware, ProductController.getAll);
routes.get('/products/:id', authMiddleware, ProductController.getByid);
routes.post('/products', authMiddleware, ProductController.create);
routes.put('/products/:id', authMiddleware, ProductController.update);
module.exports = { routes };
