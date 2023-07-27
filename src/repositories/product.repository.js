const Product = require('../models/product.model');

module.exports = {
  async getAll() {
    return await Product.find({});
  },
  async getById(id) {
    return await Product.findOne({ _id: id });
  },
  async create(payload) {
    return await Product.create(payload);
  },
  async update(id, payload) {
    return await Product.findByIdAndUpdate({ _id: id }, payload, { new: true });
  },
};
