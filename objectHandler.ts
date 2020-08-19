var helper = require('./helper.js');
class Objectclass {
    
    startTraining(task : string):any
    {
        var result=(helper.traineeName= task);
        return result;
    }
}


var person=helper.trainig('node','5',5);
var person1=helper.trainig('js','5',5);
var person2=helper.trainig('angular','5',5);
var person3=helper.trainig('java','5',5);
console.log(helper.AllModule())
console.log(new Objectclass().startTraining('java'));