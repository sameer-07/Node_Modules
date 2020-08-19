var helper = require('./helper.js');
var Objectclass = /** @class */ (function () {
    function Objectclass() {
    }
    Objectclass.prototype.startTraining = function (task) {
        var result = (helper.traineeName = task);
        return result;
    };
    return Objectclass;
}());
var person = helper.trainig('node', '5', 5);
var person1 = helper.trainig('js', '5', 5);
var person2 = helper.trainig('angular', '5', 5);
var person3 = helper.trainig('java', '5', 5);
console.log(helper.AllModule());
console.log(new Objectclass().startTraining('java'));
