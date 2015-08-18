var express = require('express');
var Api = require('./Api');
var app = express();
Api(app);
// Serving static files
// http://stackoverflow.com/questions/4720343/loading-basic-html-in-node-js
// http://stackoverflow.com/questions/16593686/what-is-the-best-practice-for-serving-html-in-node-js-with-express-js
app.use('/', express.static(__dirname + '/public', { extensions: ['html'] }));
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
//# sourceMappingURL=app.js.map