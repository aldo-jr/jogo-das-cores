var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname+'/src'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.listen(3005);
