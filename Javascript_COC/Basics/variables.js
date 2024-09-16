/* var keyword does not define any scope 
we will use let keyword which is introduce in js ES6 version becaause of the issue of block and functional scope*/

//const keywords cannot be change once define ; 
const a =24;

//value of let and var can be change
let b ="siddahnt";
b= "sp"

var c ="any";

//this method is used to output multiple variables in tabular form;
console.table([a,b,c])

//we can declare the variable as in below format but its bad practice
city = "bombay"
console.log(city);

//we can define any variable without giving its value 
//its will give us op undefined until we give its value
let studentCount;
console.log(studentCount);