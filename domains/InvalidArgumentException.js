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
})(Domain || (Domain = {}));
if (typeof exports != 'undefined') {
    exports.Domain = Domain;
}
//# sourceMappingURL=InvalidArgumentException.js.map