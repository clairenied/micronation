const express = require('express');
const router = express.Router();

const Message = require('../models/message')
const User = require('../models/user')

router.use(require('../middleware/standardMiddleware'));

// signup
router.post('/', (req, res, next) => {
	return User.create(req.body)
	.then(user => {
		req.session.userId = user.id;
		req.login(user, function(err) {
			if(err) { next(err); }
		});
		res.json(user)
	})
	.catch(next)
})

router.get('/', (req, res, next) => {
	return User.findAll()
	.then(users => {
		res.json(users)
	})
	.catch(next)
})

router.use(require('../middleware/authenticationMiddleware'));

module.exports = router;