const express = require('express');
const router = express.Router();

const Message = require('../models/message')
const User = require('../models/user')

const messagesRouter = require('./messages.js')
const usersRouter = require('./users.js')
const sessionsRouter = require('./sessions.js')

router.use('/messages', messagesRouter);
router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);


router.use(function (req, res) {
  res.status(404).end();
});

module.exports = router;
