var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (req, res) {
    res.send('Welcome to my world!');
});

app.listen(port, function () {
  console.log('The server is running at port:' + port);
});
