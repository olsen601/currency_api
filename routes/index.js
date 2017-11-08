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
  res.render('about', { name: 'Ryan', description: 'This is a currency converting website.'});
});

/* GET convert page */
router.get('/convert', function(req, res, next){

  var principle = req.query.principle;   // initial amount?
  var fromCurrency = req.query.from_currency; // from what currency?
  var toCurrency = req.query.to_currency;  // To what currency?

  var converted = Math.round(((principle / exchangeRates[fromCurrency]) * exchangeRates[toCurrency])*100)/100;   // math!

  res.render('results', {
    principle: principle,
    fromCurrency: fromCurrency,
    converted: converted,
    toCurrency: toCurrency}
  );

});

module.exports = router;
