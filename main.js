let apiKey = 'f461bb1f67b3c95d2d78b2778279a6f5';
let argv = require('yargs').argv;
let city = argv.c || 'portland';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`

// let newTemp = weather.main.temp
// newTemp = ((newTemp-273.15)*1.8)+32

const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
  let weather = JSON.parse(body)
  let message = `Its ${weather.main.temp} degrees in ${city}!`;
  console.log(message)


});
