var express = require('express');
var uuid = require('node-uuid');
var Domain = require('./Domain');
var models = new Domain.Models();
var app = express();
app.get('/api', function (req, res) {
    models.getPersonModel().findAll({
        include: [{ model: models.getCountryModel(), as: 'BirthCountry' }],
        attributes: ['personId', 'userName', 'favoriteNumber']
    }).then(function (persons) { return res.send(persons); });
    return;
    // specifying attributes, it can exclude the field of the associated column (e.g., belongsTo) 
    models.getPersonModel().findAll({ attributes: ['personId', 'userName', 'favoriteNumber', 'birthCountryId'] }).then(function (persons) { return res.send(persons); });
    return;
    models.getPersonModel().find({ where: { personId: 1 }, include: [{ model: models.getCountryModel(), as: 'BirthCountry' }] }).then(function (person) {
        // res.send('Hola ' + person.userName + '<br/>' + (<Domain.ICountry>person['BirthCountry']).countryName);
        res.send('Hola ' + person.userName + '<br/>' + person.BirthCountry.countryName);
    });
    return;
    models.getPersonModel().find({ where: { personId: 1 } }).then(function (person) {
        person.getBirthCountry().then(function (country) {
            var c = country;
            // res.send('hello ' + country.countryName);
            res.send(c);
        });
    });
    return;
    var newPerson = models.getPersonModel().build({
        personId: 0,
        userName: 'Kel ' + uuid.v4(),
        favoriteNumber: 84,
        birthCountryId: 2
    });
    var np = newPerson;
    np.save();
});
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