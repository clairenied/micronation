const Sequelize = require('sequelize');
const microDb = require('./db');
const sockets = require('../sockets')

const bcrypt = require('bcrypt')

let userSchema = {
	firstName: {
		type: Sequelize.STRING,
	},
	lastName: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING,
		unique: true,
		validate: {
			isEmail: true
		}
	},
	password: {
		type: Sequelize.STRING
	},
	googleId: {
		type: Sequelize.STRING
	}
}

var userConfig = {
	instanceMethods: {
		checkPassword: function(password){
			return new Promise((resolve, reject) => {
				bcrypt.compare(password, this.password, (err, result) => {
						if(err){ return reject(err) }
						resolve(result)
				})
			})
		},
		hashPassword: function(){
			if(!this.password) { return; }
			return new Promise((resolve, reject) => {
				bcrypt.genSalt(4, (err, salt) => {
					if(err) { return reject(err); }
		        bcrypt.hash(this.password, salt, (err, hash) => {
						if(err) { return reject(err) }
						this.password = hash
						resolve()
					})
				})
			})
		}
	},
	hooks: {
		beforeCreate: function(user){
			return user.hashPassword()
		},
		beforeUpdate: function(user){
			if(user.changed('password')) { return }
			return user.hashPassword()
		},
		afterCreate: function(user){
			return sockets.io.emit('set-user', user)
		}
	},
	getterMethods: {
		fullName: function(){
			return this.firstName + " " + this.lastName
		}
	}
}
var User = microDb.define('user', userSchema, userConfig)

module.exports = User