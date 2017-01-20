const express = require('express');
const router = express.Router();
const Promise = require('bluebird')
const chalk = require('chalk')
const sockets = require('../sockets')

const Message = require('../models/message')
const User = require('../models/user')

router.use(require('../middleware/standardMiddleware'));
router.use(require('../middleware/authenticationMiddleware'));

router.get('/', function(req, res, next){
  Message.findAll({
  	limit: 30,
  	order: [['updatedAt']],
    include: [User]
  })
  .then(messages => res.json(messages))
  .catch(next)
})

router.post('/', (req, res, next) => {
  req.body.userId = req.user.id;
  Message.create(req.body)
  .then(message => {
    console.log(chalk.blue(message))
    return res.json(message)
  })
  .catch(next)
});

module.exports = router;
