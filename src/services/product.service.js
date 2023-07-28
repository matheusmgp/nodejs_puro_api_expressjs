const NotFoundError = require('../errors/not-found-error');
const ProductRepository = require('../repositories/product.repository');

module.exports = {
  async getAll() {
    return await ProductRepository.getAll();
  },
  async getById(id) {
    const data = await ProductRepository.getById(id);
    if (data === null) throw new NotFoundError(`Product ID ${id} does not exists`);

    return data;
  },
  async create(payload) {
    return await ProductRepository.create(payload);
  },
  async update(id, payload) {
    return await ProductRepository.update(id, payload);
  },
};
