var Authorizer = (function () {
    function Authorizer(roleAllowed) {
        this.roleAllowed = roleAllowed;
    }
    Authorizer.prototype.getBindedActionToDo = function () {
        return this.actionToDo.bind(this);
    };
    Authorizer.prototype.getRole = function (basicAuthUser) {
        return "rockstar"; // davegrohl's role fetched from database
    };
    Authorizer.prototype.actionToDo = function (i, basicAuthUser) {
        // Database operation here.
        // Get the role of basicAuthUser
        var role = this.getRole(basicAuthUser); // davegrohl's role fetched from database
        return role === this.roleAllowed;
    };
    return Authorizer;
})();
function doSomething() {
    var actions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        actions[_i - 0] = arguments[_i];
    }
    var basicAuthUser = "davegrohl"; // obtained from browser's basic authentication	
    for (var i = 0; i < actions.length; ++i) {
        var a = actions[i];
        var okToContinue = a(Math.random() * 100, basicAuthUser);
        if (!okToContinue)
            break;
    }
}
console.log('');
console.log('without authorization');
doSomething(function (i, u) { console.log('Alpha ' + i); return true; }, function (i, u) { console.log('Beta ' + i); return true; });
console.log('');
console.log("Rockstar activity:");
doSomething(new Authorizer("rockstar").actionToDo, function (i, u) { console.log("Alpha " + i); return true; }, function (i, u) { console.log("Beta " + i); return true; });
console.log('');
console.log("Guest activity:");
doSomething(new Authorizer("guest").actionToDo, function (i, u) { console.log("Alpha " + i); return true; }, function (i, u) { console.log("Beta " + i); return true; });
//# sourceMappingURL=Sample.js.map