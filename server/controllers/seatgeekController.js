var request = require('request');

//venueName === artist name
//venueLocation ===
var seatGeekData = {
  url: null,
  highPrice: null,
  lowPrice: null,
  averagePrice: null,
  venueName: null,
  date: '',
  apiId: 1,
  city: null,
  venueLocation: null,
  state: null,
  eventUrl: null

};

var seatGeekGetter = function(dataObj, searchParam, location, callback) {

  var artistName = searchParam.split(' ').join('+');

  var queryString = 'https://api.seatgeek.com/2/events?q=' + artistName +'&per_page=100' + '&client_id=NzA2MzY4MnwxNDg5NTE0NDA0Ljc1';

  request(queryString, function (error, response, body) {
    console.log('testing');
    // console.log("SG RESPONSE :", JSON.parse(body));
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      // console.log('this is our data', info.events.length)

      for (var i = 0; i < info.events.length; i++){


        if (info.events[i].title === searchParam && info.events[i].venue.city === location) {

          dataObj.id = info.events[i].performers[0].id;
          dataObj.highPrice = info.events[i].stats.highest_price;
          dataObj.lowPrice = info.events[i].stats.lowest_price;
          dataObj.venueName = info.events[i].title;
          dataObj.date = info.events[i].datetime_local;
          dataObj.averagePrice = info.events[i].stats.average_price;
          dataObj.city = info.events[i].venue.city;
          dataObj.apiId= 1;
          dataObj.venueLocation = info.events[i].venue.name;
          dataObj.state = info.events[i].venue.state;
          dataObj.eventUrl = info.events[i].url;
          dataObj.url = info.events[i].performers[0].image;

          callback(null, dataObj);

        }

      }
    } else {
      alert('not found')
      response.end('not found')
      callback(error, null);
    }
  })
}

module.exports = {
  seatGeekGetter: seatGeekGetter,
  seatGeekData: seatGeekData
}
