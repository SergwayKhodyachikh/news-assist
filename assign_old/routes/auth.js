const _ = require('lodash');
const passport = require('passport');
const router = require('express').Router();
const { User, validate } = require('../models/user');
const auth = require('../middleware/auth');

router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

router.post(
  '/register',
  async (req, res, next) => {
    // validate
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // check if user exist
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('User already registered.');

    // Create new user and Save
    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    await user.save();

    next();
  },
  passport.authenticate('local'),
  function(req, res) {
    res.send();
  }
);

// Local
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send();
});

// FACEBOOK OAuth
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['public_profile', 'email'] })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  (req, res) => {
    res.redirect('/');
  }
);

// GOOGLE OAuth
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = router;
