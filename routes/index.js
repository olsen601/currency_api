var express = require('express');
var router = express.Router();
var exchangeRates = require('../model/currencyDB');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/about', function(req, res, next) {
  res.render('about', { name: 'My awesome site'});
});

/* GET convert page */
router.get('/convert', function(req, res, next){

  var dollars = req.query.dollars;   // How many dollars?
  var toCurrency = req.query.to_currency;  // To what currency?

  var converted = dollars * exchangeRates[toCurrency];   // math!

  res.render('results', {
    dollars: dollars,
    toCurrency: toCurrency,
    converted: converted}
  );

});

module.exports = router;
