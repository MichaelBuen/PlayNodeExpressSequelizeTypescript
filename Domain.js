var Sequelize = require('sequelize');
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
            favoriteNumber: { type: Sequelize.INTEGER, field: 'favorite_number' },
            birthCountryId: { type: Sequelize.INTEGER, field: 'birth_country_id' }
        }, {
            tableName: 'person'
        });
        this._country = sequelize.define('country', {
            countryId: { type: Sequelize.INTEGER, autoincrement: true, primaryKey: true, field: 'country_id' },
            countryName: { type: Sequelize.STRING, field: 'country_name' }
        }, {
            tableName: 'country'
        });
        this._person.belongsTo(this._country, { as: 'BirthCountry', foreignKey: 'birth_country_id', constraints: true });
    }
    Models.prototype.getPersonModel = function () {
        return this._person;
    };
    Models.prototype.getCountryModel = function () {
        return this._country;
    };
    return Models;
})();
exports.Models = Models;
//# sourceMappingURL=Domain.js.map