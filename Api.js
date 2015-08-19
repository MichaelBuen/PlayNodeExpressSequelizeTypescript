var uuid = require('node-uuid');
var Domain = require('./Domain');
module.exports = function (app) {
    app.get('/api', function (req, res) {
        var models = new Domain.Models();
        models.countryModel = null;
        models.personModel.findAll({
            include: [{ model: models.countryModel, as: 'BirthCountry', attributes: ['countryName'] }],
            attributes: ['personId', 'userName', 'favoriteNumber']
        }).then(function (persons) { return res.send(persons); });
        return;
        var px = new Domain.Person();
        px.personId = 0;
        px.userName = 'Kel ' + uuid.v4();
        px.setRandomFavoriteNumber();
        px.birthCountryId = 2; // reverted to plain property. sequelize doesn't support reading defineProperty yet, it doesn't support getter and setter on the prototype object      
        var newPerson = models.personModel.build(px);
        var np = newPerson;
        np.save();
        return;
        /*
        res.send('Yay');
        return;
        */
        // specifying attributes, it can exclude the field of the associated column (e.g., belongsTo) 
        models.personModel.findAll({ attributes: ['personId', 'userName', 'favoriteNumber', 'birthCountryId'] }).then(function (persons) { return res.send(persons); });
        return;
        models.personModel.find({ where: { personId: 1 }, include: [{ model: models.countryModel, as: 'BirthCountry' }] }).then(function (person) {
            // res.send('Hola ' + person.userName + '<br/>' + (<Domain.ICountry>person['BirthCountry']).countryName);
            res.send('Hola ' + person.userName + '<br/>' + person.BirthCountry.countryName);
        });
        return;
        models.personModel.find({ where: { personId: 1 } }).then(function (person) {
            person.getBirthCountry().then(function (country) {
                var c = country;
                // res.send('hello ' + country.countryName);
                res.send(c);
            });
        });
        return;
    });
};
//# sourceMappingURL=Api.js.map