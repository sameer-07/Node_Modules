var allModule = [];
module.exports.trainig = function training(traineeName, duration, noOfModules) {
    var traineeName = traineeName;
    var duration = duration;
    var noOfModules = noOfModules;
    allModule.push(traineeName);
    return traineeName + ' ' + duration + ' ' + noOfModules;
};
module.exports.AllModule = function AllModule() {
    return allModule;
};
