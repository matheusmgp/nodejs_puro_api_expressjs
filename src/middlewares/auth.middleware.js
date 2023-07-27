const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  const header = req.headers.authorization;
  console.log(header);

  if (!header) return res.status(401).send({ error: 'No Token Provided' });

  const parts = header.split(' ');

  if (!parts.length == 2) return res.status(401).send({ error: 'Token Error' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token Malformatted' });

  jwt.verify(token, 'some-key', (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid Token' });

    req.userId = decoded.id;
    return next();
  });
};
