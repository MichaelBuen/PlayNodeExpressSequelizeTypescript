// This is an internal module, can be used directly on browser code
var Domain;
(function (Domain) {
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
    Domain.InvalidArgumentException = InvalidArgumentException;
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
    Domain.Person = Person;
})(Domain || (Domain = {}));
if (typeof exports != 'undefined') {
    exports.Domain = Domain;
}
//# sourceMappingURL=all.js.map