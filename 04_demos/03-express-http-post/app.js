var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());

app.post('/books', (req, res) =>
    res.send(req.body)
);

app.listen(port, function () {
  console.log('The server is running at port:' + port);
});
