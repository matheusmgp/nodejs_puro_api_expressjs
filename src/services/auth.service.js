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
      process.env.JWT_KEY,
      { expiresIn: 60 * 60 }
    );
  },
  decodeToken(token) {
    return jwt.verify(token, process.env.JWT_KEY);
  },
};
