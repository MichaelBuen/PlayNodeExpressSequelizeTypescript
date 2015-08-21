var Domain;
(function (Domain) {
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
    exports.DomainPerson = Domain.Person;
}
//# sourceMappingURL=Person.js.map