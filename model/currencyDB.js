var request = require('request');

var baseURL = 'https://openexchangerates.org/api/latest.json';

var queryParam = {};
var APIKEY = process.env.OXR_API_KEY;

queryParam = {'api_id' : APIKEY, "base" : "USD"};

var oxrJSON;

request( {uri : baseURL, qs : queryParam}, function(oxr_response, body){
    oxrJSON = JSON.stringify(body);

    var jsonForTemplate = getExchangeRates(oxrJSON);
});


var rates = {};

function getExchangeRates(oxrJSON){

  oxrJSON.rates = rates;
  return rates;
}
module.exports = getExchangeRates;
