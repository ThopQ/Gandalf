const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('time', Date.now());
	next();
});
// define the home page route
router.get('/', function (req, res) {
	res.render('customers', { layout: 'app.hbs' });
});

module.exports = router;
