//There are two scope which are 1)Global 2)Local
//A variable declared in the global scope is accessible from anywhere in the code. 
//eg--------->
var globalVar = 'I am global';
let globalLet = 'I am also global';
const globalConst = 'I am a global constant';

function checkScope() {
    console.log(globalVar);    // Accessible
    console.log(globalLet);    // Accessible
    console.log(globalConst);  // Accessible
}

checkScope();

//Local scope refers to variables that are only accessible within a specific part of the code, such as a function or block.

//Variables declared with let or const are scoped to the block
// which means they are only accessible within the block (enclosed in curly braces {}). This is called block scope.

if (true) {
    let blockLet = 'I am inside a block';
    const blockConst = 'I am a constant inside a block';
    console.log(blockLet);    // Accessible here
    console.log(blockConst);  // Accessible here
}

//console.log(blockLet);   // Error: blockLet is not defined (block scope)
//console.log(blockConst); // Error: blockConst is not defined (block scope)

//----A variable declared with var is scoped to the function, not the block----
//that means it cant be used outside the function if it is created inside a function

//--------------------------------------------------
function one(){
    userName = "siddhant";

    function two(){
        Surname = "Phatanagare"
        console.log(userName); //username can be accessible into the nested fuction
    }
   // console.log(Surname);  ------> but variables of nested function cannot be accessable outside of that nested function
   
}


//----------------------------------------------------
//function declaration syntax one -

console.log(addone(3));

function addone(num){
    return num+1;
}

//when we use above syntax of function declaration then we can call the function before its declaration or initialization
//like given in above example

//--------------second syntax - 

console.log(addtwo(5)); //with this syntax we cant call the function before its declaration

let addtwo = function(num){
    return num+2;
}

