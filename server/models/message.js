const Sequelize = require('sequelize');
const microDb = require('./db');

let messageSchema = {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
}

var messageConfig = {}

var Message = microDb.define('message', messageSchema, messageConfig)

module.exports = Message