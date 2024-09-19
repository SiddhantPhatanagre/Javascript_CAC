//...can be called as a rest operator which can takese multiple parameters

function totalCost(...num){
    return num
}
//console.log(totalCost(20,10,50,20)); // it gives the array of all the arguments passes in an array
  

//-------------------------***------------------------=
function totalCost(nmu1,num2,...num){
    return num
}
console.log(totalCost(20,10,50,20));

//how to take object arg in a function

let user = {
    name: "siddhant",
    skill:"high"
}

function UserSkills(anyobj){
   console.log( `gaming skills of ${anyobj.name} is ${anyobj.skill} `);
}
UserSkills(user)

UserSkills({
    name:"sp",
    skill:"moderate"
})

//------------------------------------------
//array passing in a function
let arr = [12,23,34,45,56]
function Returnvalues(anyarr){
    return anyarr[2]
}
 console.log(Returnvalues(arr));

 //or
 console.log(Returnvalues([1,2,3,4,5]));