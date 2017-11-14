var request = require('request');
var baseURL = 'https://openexchangerates.org/api/latest.json';

var APIKEY = process.env.OXR_API_KEY;
var queryParam = {'app_id' : ''+APIKEY+'', 'base': 'USD', 'symbols': 'USD,EUR,CNY,JPY'};

var json;

function oxrRequest(callback){

  request({uri:baseURL, qs:queryParam}, function(err, res, body) {

      if (!err && res.statusCode == 200){
        json = JSON.parse(body);
        json = json.rates;
        var jsonForTemplate = getExchangeRates(json);
        if(callback){callback(null, jsonForTemplate);}
      }
      else {
        console.log("Error in JSON request: " + err);
        console.log(res+" res");
        console.log(body+" body");
        if(callback){callback(Error("Error fetching data from the OXR service"));}
      }
    });
}

function getExchangeRates(json){
  console.log(json+"json");
  return json;
}

var rates = setTimeout(function(){oxrRequest();}, 1000);
console.log(rates+ " dodododo");
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
