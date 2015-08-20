var Sequelize = require('sequelize');
// var domain : typeof Domain = require('./domains/all.js').Domain; // .Domain is typeless. To make strongly-typed alias for it, use typeof.
var Models = (function () {
    function Models() {
        var sequelize = new Sequelize('commerce', 'postgres', 'opensesame93', {
            dialect: 'postgres',
            define: {
                timestamps: false
            }
        });
        this._person = sequelize.define('person', {
            personId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, field: 'person_id' },
            userName: { type: Sequelize.STRING, field: 'username' },
            aboutMe: { type: Sequelize.STRING, field: 'about_me' },
            favoriteNumber: { type: Sequelize.INTEGER, field: 'favorite_number' },
            birthCountryId: { type: Sequelize.INTEGER, field: 'birth_country_id' }
        }, {
            tableName: 'person'
        });
        this._country = sequelize.define('country', {
            countryId: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true, field: 'country_id' },
            countryName: { type: Sequelize.STRING, field: 'country_name' },
            population: { type: Sequelize.INTEGER, field: 'population' }
        }, {
            tableName: 'country'
        });
        this._person.belongsTo(this._country, { as: 'BirthCountry', foreignKey: 'birth_country_id', constraints: true });
    }
    Object.defineProperty(Models.prototype, "personModel", {
        get: function () {
            return this._person;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Models.prototype, "countryModel", {
        get: function () {
            return this._country;
        },
        enumerable: true,
        configurable: true
    });
    return Models;
})();
exports.Models = Models;
//# sourceMappingURL=DomainMappings.js.map