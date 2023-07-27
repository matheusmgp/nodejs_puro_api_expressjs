const express = require('express');
const { routes } = require('./routes/products.routes');
const { userRoutes } = require('./routes/users.routes');
require('./infra/database');
const app = express();
app.use(express.json());
app.use(routes);
app.use(userRoutes);

app.listen(3333, () => {
  console.info(`API running on port ${3333}`);
});
