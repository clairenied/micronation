const Sequelize = require('sequelize');
const microDb = require('./db');
const sockets = require('../sockets')
const chalk = require('chalk')

let messageSchema = {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
}

var messageConfig = {
  hooks: {
    afterCreate(message) {
      return message.getUser()
      .then(user => {
        message.dataValues.user = user;
        return sockets.io.emit('new-message', message);
      })
    }
  }
}

var Message = microDb.define('message', messageSchema, messageConfig)

module.exports = Message