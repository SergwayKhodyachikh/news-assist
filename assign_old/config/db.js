const mongoose = require('mongoose');
const winston = require('winston');

module.exports = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(() => winston.info(`connected to ${process.env.MONGO_URI}`))
    .catch(err => winston.error('DATABASE CONNECTION FAILED', err));
};
