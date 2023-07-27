const User = require('../models/user.model');

module.exports = {
  async create(payload) {
    return await User.create(payload);
  },
  async findByEmail(email) {
    return await User.findOne({ email });
  },
};
