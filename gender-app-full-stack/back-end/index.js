const express = require('express');
const mongoose = require('mongoose');
const genders = require('./routes/genders');

const app = express();

mongoose
  .connect('mongodb://localhost/genderapp')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Could not connect to mongoDB'));

app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/genders', genders);

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
