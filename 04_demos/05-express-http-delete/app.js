var express = require('express');
var app = express();
app.use(express.json());
var port = 3000;

app.delete('/books/:bookName', function (req, res) {
   let book = req.params.bookName;
   let message = {message : `${book} is deleted successfully.`};
   res.send(message);
});


app.listen(port, function () {
  console.log('The server is running at port:' + port);
});
