import express = require('express');
var app = express();

app.get('/', (req, res) => res.send('Hello Lambda World!'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

