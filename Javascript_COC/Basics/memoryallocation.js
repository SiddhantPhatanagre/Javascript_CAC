 //primitive vlaues are stored into stack; ---pass by value
 //non-primitive values are stored into heap  ---pass by reference


 //example of primitive memory allocation
let studentName = "siddhant"
let cpystudent = studentName
cpystudent = "sp"
console.log(studentName);
console.log(cpystudent);

//example of heap memory allocation
//here no copy is created and direct change occurs in original value;

let userOne ={
    name:"vedant",
    age: 22
}
let cpyUser = userOne
cpyUser.name = "Phatangare"
console.log(cpyUser.name);
console.log(userOne.name);