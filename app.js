const express = require('express');
const exphbs = require('express-handlebars');
const open = require('open');
const customers = require('./routes/customers');

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

app.post('/auth', function (req, res) {
	console.log(req.body);
});

app.get('/', function (req, res) {
	res.render('login', { layout: 'auth.hbs' });
});

app.use('/customers', customers);

app.listen(port, () => {
	console.log(`Gandalf is live at http://localhost:${port}, baby!`);
	//open('http://localhost:3000');
});
