const microDb = require('./db');

const User = require('./user');
const Message = require('./message');

User.hasMany(Message)
Message.belongsTo(User)


module.exports = microDb;


// Hello, I am a many to many relationship 	  *!!!!!REMEMBER NO CAMEL CASE!!!!!!*
// Category.belongsToMany(Product, { through: 'product_category' }) //(NO CAMELS)
// Product.belongsToMany(Category, { through: 'product_category' }) //(NO CAMELS)
