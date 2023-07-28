const UserRepository = require('../repositories/user.repository');
const authService = require('../services/auth.service');
const InvalidEmailPasswordError = require('../errors/invalid-email-password-error');
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

    if (password === undefined || password == '' || found == null) {
      throw new InvalidEmailPasswordError(`Invalid email or password`);
    }
    if (!(await authService.comparePassword(password, found.password))) {
      throw new InvalidEmailPasswordError(`Invalid email or password`);
    }
    token = authService.generateToken(JSON.parse(JSON.stringify(found)));
    return { token };
  },
};
