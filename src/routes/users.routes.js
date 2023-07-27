const { Router } = require('express');
const UserController = require('../controllers/user.controller');
const userRoutes = Router();

userRoutes.post('/users', UserController.create);
userRoutes.post('/signin', UserController.login);
module.exports = { userRoutes };
