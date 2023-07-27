const UserRepository = require('../repositories/user.repository');
const authService = require('../services/auth.service');

module.exports = {
  async create(payload) {
    return await UserRepository.create(payload);
  },
  async findByEmail(email) {
    return await UserRepository.findByEmail(email);
  },
  async login(value) {
    const { email, password } = value;
    let token;
    const found = await this.findByEmail(email);

    if (found == null) {
      throw new Error();
    }
    if (!(await authService.comparePassword(password, found.password))) {
      throw new Error();
    }
    token = authService.generateToken(JSON.parse(JSON.stringify(found)));
    return { token };
  },
};
