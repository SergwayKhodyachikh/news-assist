const passport = require('passport');
const User = require('../models/User');
const config = require('config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

// Create local strategy
const localLogin = new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false);
      const isMatch = await user.comparePassword(password);
      isMatch ? done(null, user) : done(null, false);
    } catch (err) {
      return done(err);
    }
  }
);

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.get('jwtPrivateKey')
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, async ({ sub }, done) => {
  try {
    const user = await User.findById(sub);
    user ? done(null, user) : done(null, false);
  } catch (err) {
    done(err, false);
  }
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
