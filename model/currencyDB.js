var request = require('request');
var baseURL = 'https://openexchangerates.org/api/latest.json';

var APIKEY = process.env.OXR_API_KEY;
var queryParam = {'app_id' : ''+APIKEY+'', 'base': 'USD', 'symbols': 'USD,EUR,CNY,JPY'};

var exchangeRatesJson;

function oxrRequest(callback){

  request({uri:baseURL, qs:queryParam}, function(err, res, body) {

      if (!err && res.statusCode == 200){
        json = JSON.parse(body);
        json = json.rates;
        exchangeRatesJson = json;
        callback();
      }
      else {
        console.log("Error in JSON request: " + err);
        console.log(res+" res");
        console.log(body+" body");
        callback(err);
          if(callback){callback(Error("Error fetching data from the OXR service"));}
      }
    });
}

function convert(fromCur, toCur, princ) {
  var result = Math.round(((princ / exchangeRatesJson[fromCur]) * exchangeRatesJson[toCur])*100)/100;
  return result;
}

module.exports = {
  getRates: oxrRequest,
  convert: convert
}
