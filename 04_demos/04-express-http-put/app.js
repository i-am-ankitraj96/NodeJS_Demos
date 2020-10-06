var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());

app.put('/books/:bookName', function (req, res) {
    res.send(req.params);
});

app.listen(port, function () {
  console.log('The server is running at port:' + port);
});
