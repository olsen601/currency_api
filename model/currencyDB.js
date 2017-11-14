var request = require('request');
var baseURL = 'https://openexchangerates.org/api/latest.json';

var APIKEY = "whatever yours was sorry";
var queryParam = {'app_id' : ''+APIKEY+'', 'base': 'USD', 'symbols': 'USD,EUR,CNY,JPY'};

var exchangeRatesJson;

function oxrRequest(callback){

  request({uri:baseURL, qs:queryParam}, function(err, res, body) {

      if (!err && res.statusCode == 200){
        json = JSON.parse(body);
        json = json.rates;
        exchangeRatesJson = json;
        console.log(json)
        callback();
      }
      else {
        console.log("Error in JSON request: " + err);
        console.log(res+" res");
        console.log(body+" body");
        callback(err);
//        if(callback){callback(Error("Error fetching data from the OXR service"));}
      }
    });
}


function convert(fromCur, toCur, amount) {
  // math here with exchangeRatesJson
  console.log('convert method running');
  console.log(exchangeRatesJson);
  //todo use data and exchangeRatesJson to figure out actual value
  return 100;
}



module.exports = {
  getRates: oxrRequest,
  convert: convert
}

//module.exports = rates;

  // oxrJSON = JSON.stringify(data);
  // var jsonForTemplate = getExchangeRates(oxrJSON);
// var rates = {};
//
// function getExchangeRates(oxrJSON){
//
//   rates = oxrJSON;
//   console.log(oxrJSON);
//   return rates;
// }
