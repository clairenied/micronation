const express = require('express');
const app = express();
const chalk = require('chalk')
const path = require('path')

const { generateImage } = require('random-ascii-image-generator')

const morgan = require('morgan');
const nunjucks = require('nunjucks');

const bodyParser = require('body-parser');
const routes = require('./routes/');

const poemDb = require('./models')

app.use(morgan('tiny'));

// body parser for form input
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static('public'))


microDb.sync({ 
	// force: true 
})
.then(function () {
  app.listen(3000, function () {
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
