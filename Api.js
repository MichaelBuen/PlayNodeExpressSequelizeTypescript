var uuid = require('node-uuid');
var dm = require('./DomainMappings');
var domain = require('./domains/all.js').Domain; // .Domain is typeless. To make strongly-typed alias for it, use typeof. 
module.exports = function (app) {
    app.get('/api', function (req, res) {
        var models = new dm.Models();
        var px = new domain.Person();
        px.personId = 0;
        px.userName = 'Kel ' + uuid.v4();
        px.setRandomFavoriteNumber();
        px.birthCountryId = 2; // reverted to plain property. sequelize doesn't support reading defineProperty yet, it doesn't support getter and setter on the prototype object      
        var newPerson = models.personModel.build(px);
        var np = newPerson;
        np.save();
        return;
        models.personModel.findAll({
            include: [{ model: models.countryModel, as: 'BirthCountry', attributes: ['countryName', 'population'] }],
            attributes: ['personId', 'userName', 'favoriteNumber']
        }).then(function (persons) { return res.send(persons); });
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
                // var c : domains.ICountry = country;            
                var c = country;
                // res.send('hello ' + country.countryName);
                res.send(c);
            });
        });
        return;
    });
};
//# sourceMappingURL=Api.js.map