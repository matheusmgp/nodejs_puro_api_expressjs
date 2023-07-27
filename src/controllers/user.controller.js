const { responseHttp } = require('../httpResponse/response');
const UserService = require('../services/user.service');

module.exports = {
  async create(req, res) {
    const body = req.body;
    responseHttp(await UserService.create(body), res);
  },
  async login(req, res) {
    const body = req.body;
    responseHttp(await UserService.login(body), res);
  },
};
