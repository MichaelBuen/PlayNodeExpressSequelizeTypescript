var Sequelize = require('sequelize');
var InvalidArgumentException = (function () {
    function InvalidArgumentException(message) {
        this.message = message;
        this.name = "InvalidArgumentException";
    }
    InvalidArgumentException.prototype.toString = function () {
        return this.name + ': ' + this.message;
    };
    return InvalidArgumentException;
})();
exports.InvalidArgumentException = InvalidArgumentException;
var Person = (function () {
    function Person() {
    }
    /* Sequelize cannot read Object.defineProperty
    public get birthCountryId() : number {
        return this._birthCountryId;
    }
    
    public set birthCountryId(value: number)  {
        if (value <= 0)
            throw new InvalidArgumentException("Value cannot be negative");
        this._birthCountryId = value;
    }*/
    Person.prototype.setRandomFavoriteNumber = function () {
        this.favoriteNumber = Math.ceil(Math.random() * 100);
    };
    return Person;
})();
exports.Person = Person;
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
//# sourceMappingURL=Domain.js.map