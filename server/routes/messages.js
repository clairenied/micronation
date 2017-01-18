const express = require('express');
const router = express.Router();
const Promise = require('bluebird')

const Message = require('../models/message')
const User = require('../models/user')

router.use(require('../middleware/standardMiddleware'));
router.use(require('../middleware/authenticationMiddleware'));

router.get('/', function(req, res, next){
  Message.findAll({
  	where: req.query,
  	limit: 10,
  	order: '"updatedAt" DESC',
    include: [User]
  })
  .then(messages => res.json(messages))
  .catch(next)
})

router.post('/', (req, res, next) => {
  let userPromise = User.findById(req.user.id)
  let messagePromise = Message.create(req.body)

  Promise.all([userPromise, messagePromise])
  .spread((user, message) => message.setUser(user))
  .then(message => res.json(message))
  .catch(next)
});

module.exports = router;
