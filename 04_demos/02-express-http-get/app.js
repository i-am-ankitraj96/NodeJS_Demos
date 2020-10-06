var express = require('express');
var app = express();
var port = 3000;
app.use(express.json());

app.get('/', (req, res) =>
    res.send("This is your first HTTP Method.")
);

app.listen(port, function () {
  console.log('The server is running at port:' + port);
});
