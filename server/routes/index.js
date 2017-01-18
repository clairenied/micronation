const express = require('express');
const router = express.Router();
const chalk = require('chalk');

const Poem = require('../models/poem')
const User = require('../models/user')

const aboutRouter = require('./about.js')
const poemsRouter = require('./poems.js')
const usersRouter = require('./users.js')
const sessionsRouter = require('./sessions.js')

router.use('/about', aboutRouter);

router.use('/poem', poemsRouter);
router.use('/user', usersRouter);
router.use('/sessions', sessionsRouter);


router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
