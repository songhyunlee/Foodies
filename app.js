var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var app = express();

app.use(jsonParser);

app.use(function (req, res, next) {
  next();
})

app.use(express.static('./'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/default.js', function(req, res) {
  res.sendFile(__dirname + '/public/default.js');
});

app.listen(process.env.PORT || 8080);
