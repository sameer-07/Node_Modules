const trainees = ['Priyanka' ,'sameer','Moni'];
   
class ArrayClass {
    
    public allTrainees():string[]
    {
        return trainees;
    }
     newTrainees(newJoinser : string) : string[] {
       
        trainees.push(newJoinser);
        return trainees;
    }

    noOfTrainees() :Number{

          return trainees.length
    }
    addAtTop(trainee : string) : string[] {
        
        trainees.unshift(trainee);
        return trainees;
    }
    
     addTrainee(trainee : string) : any  {
         
     if(trainees.indexOf(trainee) == 1)
     {
     console.log("this is already present")
     }
     else
    {
        this.newTrainees(trainee);
    }
     
    }

    removeTrainee() : String[] {
        let pos = 2
        let n = 2  
        let removedItems = trainees.splice(pos, n) 
        return trainees;
    }

    sortTrainee() : String[] {
        trainees.sort();
        return trainees;
    }




};
console.log(new ArrayClass())
console.log(new ArrayClass().newTrainees('javed')); 
console.log(new ArrayClass().noOfTrainees()); 
console.log(new ArrayClass().addAtTop('wajid'));
console.log(new ArrayClass().noOfTrainees()); 
console.log(new ArrayClass().addTrainee('none'));
console.log(new ArrayClass().noOfTrainees()); 
console.log(new ArrayClass().allTrainees())
console.log(new ArrayClass().removeTrainee())
console.log(new ArrayClass().allTrainees())
console.log(new ArrayClass().sortTrainee())
console.log(new ArrayClass())