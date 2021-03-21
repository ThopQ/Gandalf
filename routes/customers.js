const express = require('express');
const router = express.Router();

// define the home page route
router.get('/', function (req, res) {
	res.render('customers', { layout: 'app.hbs' });
});

router.get('/:id/computers', function (req, res) {
	//res.render('customers', { layout: 'app.hbs' });
	res.send(`Test ID: ${req.params.id}`);
});

module.exports = router;
