const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('customers.js' + __dirname);
	next();
});
// define the home page route
router.get('/', function (req, res) {
	res.send('Customers');
});

module.exports = router;
