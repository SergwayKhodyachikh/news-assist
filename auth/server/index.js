const express = require('express');
const morgan = require('morgan');
const app = express();
const auth = require('./routes/auth');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect('mongodb://localhost/auth', {
  useNewUrlParser: true,
  useCreateIndex: true
});

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(express.json({type: '*/*'}));
app.use('/', auth);

// Server Setup
const port = process.env.PORT || 3090;
app.listen(port, () => console.log(`Listening on port ${port}...`));
