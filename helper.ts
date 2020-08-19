const allModule: string | string[]= []
module.exports.trainig=function training( traineeName: string,duration: string, noOfModules:number ,moduleList: Array<String> ) {
   var traineeName = traineeName;
    var duration = duration;
    var noOfModules = noOfModules;
    allModule.push(traineeName);
  
    return traineeName +' '+duration+' '+noOfModules;
  
  }

  module.exports.AllModule=function AllModule( ) {
    return allModule;
   }


  
