const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = {
  async hashPassword(password, salt = 10) {
    return await bcrypt.hash(password, salt);
  },
  async comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
  },
  generateToken(payload) {
    return jwt.sign(
      {
        data: payload,
      },
      'some-key',
      { expiresIn: 60 * 60 }
    );
  },
  decodeToken(token) {
    return jwt.verify(token, 'some-key');
  },
};
