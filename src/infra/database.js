const mongoose = require('mongoose');
const url = process.env.MONGODB_URL;
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
