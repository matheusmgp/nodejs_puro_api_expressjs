module.exports = {
  responseHttp(data, res) {
    if (!data) {
      res.status(400).json({ message: 'Problema na requisição' });
    } else {
      res.status(200).json(data);
    }
  },
};
