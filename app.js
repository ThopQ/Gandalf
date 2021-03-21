const express = require('express');
const db = require('diskdb');
const exphbs = require('express-handlebars');
const open = require('open');
const customers = require('./routes/customers');

db.connect('./data', ['customers']);

const app = express();
const port = 3000;

app.engine(
	'.hbs',
	exphbs({
		extname: 'hbs',
		layoutsDir: `${__dirname}/public/views/layouts`,
	})
);
app.set('view engine', '.hbs');
app.set('views', `${__dirname}/public/views`);
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded());

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

app.get('/', function (req, res) {
	res.render('login', { layout: 'auth.hbs' });
});

app.use('/customers', customers);

app.listen(port, () => {
	console.log(`Gandalf is live at http://localhost:${port}, baby!`);
	//open('http://localhost:3000');
});
