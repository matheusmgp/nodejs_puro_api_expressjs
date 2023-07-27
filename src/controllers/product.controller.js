const { responseHttp } = require('../httpResponse/response');
const ProductService = require('../services/product.service');

module.exports = {
  async getAll(req, res) {
    responseHttp(await ProductService.getAll(), res);
  },
  async getByid(req, res) {
    responseHttp(await ProductService.getById(req.params.id), res);
  },
  async create(req, res) {
    const body = req.body;
    responseHttp(await ProductService.create(body), res);
  },
  async update(req, res) {
    const id = req.params.id;
    const body = req.body;
    responseHttp(await ProductService.update(id, body), res);
  },
};
