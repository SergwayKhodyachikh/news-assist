const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

const billingRoutes = require('./routes/billingRoutes');
const surveysRoutes = require('./routes/surveysRoutes');
const authRoutes = require('./routes/auth');
const app = express();

app.use(express.json());
app.use(
  cookieSession({
    /* 30 days in total */
    maxAge: 30 /* days */ * 24 /* hours */ * 60 /* minutes */ * 60 /* seconds */ * 1000 /* milliseconds */,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
app.use(authRoutes);
app.use(billingRoutes);
app.use(surveysRoutes);
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like out main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
