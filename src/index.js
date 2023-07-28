require('dotenv').config();
require('./infra/database');

const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.info(`API running on port ${process.env.PORT}`);
});
