const Sequelize = require('sequelize');
const config = require('../config')
const microDb = new Sequelize(config.db, {})

module.exports = microDb