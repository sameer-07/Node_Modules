var trainees = ['Priyanka', 'sameer', 'Moni'];
var ArrayClass = /** @class */ (function () {
    function ArrayClass() {
    }
    ArrayClass.prototype.allTrainees = function () {
        return trainees;
    };
    ArrayClass.prototype.newTrainees = function (newJoinser) {
        trainees.push(newJoinser);
        return trainees;
    };
    ArrayClass.prototype.noOfTrainees = function () {
        return trainees.length;
    };
    ArrayClass.prototype.addAtTop = function (trainee) {
        trainees.unshift(trainee);
        return trainees;
    };
    ArrayClass.prototype.addTrainee = function (trainee) {
        if (trainees.indexOf(trainee) == 1) {
            console.log("this is already present");
        }
        else {
            this.newTrainees(trainee);
        }
    };
    ArrayClass.prototype.removeTrainee = function () {
        var pos = 2;
        var n = 2;
        var removedItems = trainees.splice(pos, n);
        return trainees;
    };
    ArrayClass.prototype.sortTrainee = function () {
        trainees.sort();
        return trainees;
    };
    return ArrayClass;
}());
;
console.log(new ArrayClass());
console.log(new ArrayClass().newTrainees('javed'));
console.log(new ArrayClass().noOfTrainees());
console.log(new ArrayClass().addAtTop('wajid'));
console.log(new ArrayClass().noOfTrainees());
console.log(new ArrayClass().addTrainee('none'));
console.log(new ArrayClass().noOfTrainees());
console.log(new ArrayClass().allTrainees());
console.log(new ArrayClass().removeTrainee());
console.log(new ArrayClass().allTrainees());
console.log(new ArrayClass().sortTrainee());
console.log(new ArrayClass());
