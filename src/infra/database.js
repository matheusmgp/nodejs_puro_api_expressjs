const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/products';
mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to Database');
  })
  .catch((err) => {
    console.log('Not Connected to Database ERROR! ', err);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
