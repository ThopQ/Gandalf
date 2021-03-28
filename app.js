//import express.js backend
const express = require('express');

//import express-handlebars template-engine
const exphbs = require('express-handlebars');

//import open to quick start browser
const open = require('open');

//import outsourced api routes
const api = require('./routes/api');

//import outsourced customers routes
const customers = require('./routes/customers');

//initiate express as app
const app = express();

//port for express webserver
const port = 3000;

//use handlebars as default template engine and define path
app.engine(
	'.hbs',
	exphbs({
		extname: 'hbs',
		layoutsDir: `${__dirname}/public/views/layouts`,
	})
);
app.set('view engine', '.hbs');

//set up views directory inside public directory
app.set('views', `${__dirname}/public/views`);
app.use(express.static(`${__dirname}/public`));

//used to handle http POST requests with json and form-data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//checks credentials from login and redirects to customers on success
app.post('/auth', function (req, res) {
	let AuthUser = {
		username: req.body.username,
		password: req.body.password,
	};

	if (
		AuthUser.username === 'thomas.iseli' &&
		AuthUser.password === 'tekopw01'
	) {
		res.redirect('/customers');
	} else {
		res.redirect('/');
	}
});

//route for login-view
app.get('/', function (req, res) {
	res.render('login', { layout: 'auth.hbs' });
});

//use outsourced api route
app.use('/api', api);

//use outsourced customers route
app.use('/customers', customers);

//listen to connection on port 3000
app.listen(port, () => {
	console.log(`Gandalf is live at http://localhost:${port}, baby!`);

	//open default browser windows at app-startup
	//open('http://localhost:3000');
});
