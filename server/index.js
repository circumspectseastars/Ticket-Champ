var express = require('express');
var mysql = require('mysql');
var request = require('request');
var dbModel = require('./models/dbModels.js');
var seatGeekAPI = require('./controllers/seatgeekController.js');
var ticketMasterAPI = require('./controllers/ticketMasterController.js');

var app = express();
app.use(express.static(__dirname + '/../client/'));

//test case for ticket master api
ticketMasterAPI.queryTicketMaserForEvent('warriors');

app.post('/event', function(req, res) {
  var body = '';
  req.on('data', function(chunk) {
    body += chunk
  })
  req.on('end', function() {
    var userInput = body;
    console.log('Post Request ', userInput);
  })
})

app.get('/home', function(req, res) {
  console.log('Get Request Recieved!')
});

//changed port
app.listen(process.env.PORT || 5000);