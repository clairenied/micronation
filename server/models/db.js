const Sequelize = require('sequelize');
const config = require('../config')
const microdb = new Sequelize(config.db, {})

module.exports = microdb