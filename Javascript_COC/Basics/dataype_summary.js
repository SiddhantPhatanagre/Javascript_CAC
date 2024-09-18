const id = Symbol("123");
const secid = Symbol("123");
console.log(id==secid);
 let arr = [1,2,34,4]
 console.log(typeof arr);
 console.log(typeof id);

 //primitive ---->
 //7types = string,Number,Boolean,null,undefined, symbol ,BigInt ;
//Primitive types (like number, string, boolean, null, undefined, symbol, and bigint) are passed by value in JavaScript.
//When you pass a primitive value to a function, a copy of that value is created and used within the function. This means any changes made to the parameter inside the function do not affect the original variable outside the function.

//call by value ---->
function modifyValue(x) {
    x = 20;
    console.log("Inside function:", x); // 20
}

let a = 10;
modifyValue(a);
console.log("Outside function:", a); // 10 (unchanged)


 //non=primitive (reference) ------>
 //Array, object ,functions

 //call by reference ---->
 function modifyObject(obj) {
    obj.name = "John";
    console.log("Inside function:", obj); // { name: "John" }
}

let person = { name: "Alice" };
modifyObject(person);
console.log("Outside function:", person); // { name: "John" } (changed)