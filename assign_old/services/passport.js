const cookieSession = require('cookie-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models/user');

module.exports = app => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user);
    });
  });

  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        try {
          // verifyUser
          const user = await User.findOne({ email });
          if (!user) return done(null, false);
          // verifyPassword
          const isMatch = await user.comparePassword(password);
          isMatch ? done(null, user) : done(null, false);
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/api/auth/google/callback',
        proxy: true
      },
      async (accessToken, refreshToken, { emails, name }, done) => {
        const email = emails[0].value;
        const fullName =
          name.givenName && name.familyName
            ? `${name.givenName} ${name.familyName}`
            : 'Unknown';

        const existingUser = await User.findOne({
          email
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({ email, name: fullName }).save();
        done(null, user);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: '/api/auth/facebook/callback',
        proxy: true,
        profileFields: ['id', 'emails', 'name']
      },
      async (accessToken, refreshToken, { emails, name }, done) => {
        console.log(emails);

        const email = emails[0].value;
        const fullName =
          name.givenName && name.familyName
            ? `${name.givenName} ${name.familyName}`
            : 'Unknown';

        const existingUser = await User.findOne({
          email
        });

        if (existingUser) {
          return done(null, existingUser);
        }

        const user = await new User({
          email,
          name: fullName
        }).save();
        done(null, user);
      }
    )
  );

  app.use(
    cookieSession({
      /* 30 days in total */
      maxAge:
        30 /* days */ *
        24 /* hours */ *
        60 /* minutes */ *
        60 /* seconds */ *
        1000 /* milliseconds */,
      keys: [process.env.COOKIE_KEY]
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
