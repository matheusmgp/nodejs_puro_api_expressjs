const { Router } = require('express');
const ProductController = require('../controllers/product.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const productsRoutes = Router();

productsRoutes.get('/products', authMiddleware, ProductController.getAll);
productsRoutes.get('/products/:id', authMiddleware, ProductController.getByid);
productsRoutes.post('/products', authMiddleware, ProductController.create);
productsRoutes.put('/products/:id', authMiddleware, ProductController.update);
module.exports = { productsRoutes };
