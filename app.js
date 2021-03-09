const express = require('express');
const exphbs = require('express-handlebars');
const open = require('open');
const customers = require('./routes/customers');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs({ extname: 'hbs', defaultLayout: 'app.hbs' }));
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('login');
});

app.use('/customers', customers);

app.listen(port, () => {
	console.log(`Gandalf is live at http://localhost:${port}, baby!`);
	//open('http://localhost:3000');
});
