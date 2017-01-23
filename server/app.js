const express = require('express');
const app = express();

const server = require('http').createServer(app);
require('./sockets').setIO(server);


const chalk = require('chalk')
const path = require('path')

const microDb = require('./models')
const Message = require('./models/message')
const User = require('./models/user')

const { generateImage } = require('random-ascii-image-generator')

const morgan = require('morgan');

const bodyParser = require('body-parser');
const routes = require('./routes/');

app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '..', 'public')));

microDb.sync()
.then(function () {
  server.listen(3000, function () {
  	generateImage()
  	console.log(chalk.green('App listening on port 3000'))
  });
})
.catch(console.error);

app.use('/api', require('./routes'))

app.get('/*', function(req, res, next){
	res.sendFile(path.join(__dirname, "../browser/index.html"))
})

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});
