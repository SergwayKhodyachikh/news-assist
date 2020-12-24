const winston = require('winston');
require('express-async-errors');

const app = require('express')();

// load environment variables
require('dotenv').config();
// logging
require('./services/logger')(app);
// passport authentication service
require('./services/passport')(app);
// database insalivation
require('./config/db')();
// routes
require('./routes')(app);
// production settings
require('./config/production')(app);

const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, () => {
  winston.info(`Listening on port ${PORT}`);
});
