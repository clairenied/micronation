const express = require('express')
const router = express.Router()
const passport = require('passport')

const User = require('../models/user')

module.exports = router

router.use((req, res, next) => {
	if(!req.user){
		const err = new Error('Unauthorized')
		err.status = 403
		return next(err)
	}
	next()
})
