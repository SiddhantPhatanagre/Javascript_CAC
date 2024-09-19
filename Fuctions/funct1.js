function addTwoNum(a,b){
    console.log(a+b)
}
//addTwoNum(2,3) 


function addTwoNum(a,b){
   return a+b;
}

addTwoNum(3,7)   //-------why this line not runnig? ANS = 	The function itself is correct, but you need to use console.log() to display output
let res = addTwoNum(3,4)

console.log(res);


//------------------------------------------
function logiUserMsg(username){
    if(!username){
        console.log("please return valid username");
        return;
    }
    return `${username} just logged in`
}
let a = logiUserMsg()
console.log(a);