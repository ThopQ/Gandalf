const express = require('express');
const customers = require('./routes/customers');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/customers', customers);

app.listen(port, () => {
	console.log(`Gandalf is live at http://localhost:${port}, baby!`);
});