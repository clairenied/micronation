const express = require('express');
const router = express.Router();
const config = require('../config');
const cookieParser = require('cookie-parser');
const User = require('../models/user');

const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const pg = require('pg');

const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;

router.use(session({
  secret: 'secret llama time',
  resave: false,
  saveUninitialized: true,
  store: new pgSession({
    pg: pg,
    conString: config.db,
  }),
}));


passport.use(
  new GoogleStrategy({
    clientID: '220871929543-leo4iec3ojgdf5m0r7ook1jcm1bolonl.apps.googleusercontent.com',
    clientSecret: 'KAGK2BIR7srF03Pf7hDjlS86',
    callbackURL: 'http://localhost:3000/api/sessions/auth/google/callback'
  },
  function (token, refreshToken, profile, done) {
    var info = {
		  name: profile.displayName,
		  email: profile.emails[0].value,
		  photo: profile.photos ? profile.photos[0].value : undefined
		}
		User.findOrCreate({
		  where: { googleId: profile.id },
		  defaults: info
		})
		.spread(function (user) {
		  done(null, user)
		})
		.catch(done)
  })
)

passport.serializeUser(function (user, done) {
  done(null, user.id);
})

passport.deserializeUser(function (id, done) {
  User.findById(id)
  .then(function (user) {
    done(null, user);
  })
  .catch(function (err) {
    done(err);
  })
})

passport.use('local', new LocalStrategy(
	{
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    User.findOne({where: { email }})
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Login incorrect' })
      }
      return user.checkPassword(password)
        .then(ok => {
          if (!ok) {
            return done(null, false, { message: 'Login incorrect' })
          }
          done(null, user)              
        })
    })
    .catch(done)
  }
));

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;