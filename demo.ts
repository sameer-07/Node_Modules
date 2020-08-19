const { Interface } = require("readline");

interface Citizen
{
    name:string;
    lastname?:string;
}

let personObj : Citizen ={name :"sameer"}
personObj.name="wajid";
console.log(personObj.name)

function normal(dob:number,dom:number,doy:number):number{
    return(dob+dom+doy);
}

normal(1,23,10)