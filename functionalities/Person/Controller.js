/// <reference path='../../typings/angularjs/angular.d.ts'/>
var Controller = (function () {
    function Controller() {
        this.name = 'Linus T';
        this.persons = [];
    }
    Controller.prototype.showName = function () {
        {
            var p = new Domain.Person();
            p.userName = 'hello';
            this.persons.push(p);
        }
        {
            var p = new Domain.Person();
            p.userName = 'nice';
            this.persons.push(p);
        }
    };
    return Controller;
})();
angular.module('App', []).controller('Controller', Controller);
//# sourceMappingURL=Controller.js.map