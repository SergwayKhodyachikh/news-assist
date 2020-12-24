const express = require('express');
const router = express.Router();
const {signin, signup} = require('../controllers/auth');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.get('/', requireAuth, (req, res) => {
  res.send({ hi: 'there' });
});

router.post('/signin', requireSignin, signin);
router.post('/signup', signup);

module.exports = router;
