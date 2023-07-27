const ProductRepository = require('../repositories/product.repository');

module.exports = {
  async getAll() {
    return await ProductRepository.getAll();
  },
  async getById(id) {
    return await ProductRepository.getById(id);
  },
  async create(payload) {
    return await ProductRepository.create(payload);
  },
  async update(id, payload) {
    return await ProductRepository.update(id, payload);
  },
};
