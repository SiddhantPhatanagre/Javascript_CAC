//object literals

//symbol declaration ----->
const Sym = Symbol("key1");

let User1 = {
    name : "siddhant" , 
    age :18 , 
    email : "phatanagaresiddhant@gmail.com" ,
    isLoggedIn : 'true' ,
    [Sym] : "mykey1"  //symbol value
}

//to access the values following methods can be used ----------->

console.log(User1.name);

//or

console.log(User1["name"]);


//symbol declaration
console.log(User1[Sym]);


//for changing the values in object
User1.email = "sp@gmail.com"
console.log(User1);

//Object.freeze(User1)   //----> we cannot change the values in object by declaring freeze property 

User1.greeting = function(){
    console.log(`hello user my name is ${this.name}`);  // this keyword reffers to the current object 
}

console.log(User1.greeting());