const Sequelize = require('sequelize');

const microDb = new Sequelize('postgres://localhost:5432/microDb', {})

module.exports = microDb