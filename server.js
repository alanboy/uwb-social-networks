var express = require('express');
const qs = require('querystring');
var FB = require('fb');
var app = express();

var server = app.listen(8080);

function showFriends(request, response) {

    FB.setAccessToken(at);
    FB.api('me/friends', function (res) {
      if(!res || res.error) {
         console.log(!res ? 'error occurred' : res.error);
         response.send(res.error);
         return;
      }
      response.send(res);
    });
}

app.get('/showFriends', showFriends);
app.use(express.static('.'));

