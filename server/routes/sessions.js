const router = require('express').Router()
const User = require('../models/user')
const passport = require('passport')
const LocalStrategy   = require('passport-local').Strategy;
const sockets = require('../sockets')

module.exports = router

router.use(require('../middleware/standardMiddleware'));

router.get('/auth/google', passport.authenticate('google', { scope : 'email' }));

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/', 
    failureRedirect: '/'
  }));

router.post('/local-login', (req, res, next) => 
	passport.authenticate('local', {
		successRedirect: '/',
		failureRedirect: '/' 
	})(req, res, next)
);

router.get('/whoami', (req, res, next) =>
  res.send(req.user)
)

// log out
router.post('/logout', (req, res, next) => {
	req.logout()
	res.redirect('/')
})