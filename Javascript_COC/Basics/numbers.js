//this will store in number format
const score = 400;

//below code is assured code that the following var is of num datatype
const balance  =  new Number(230);
console.log(balance);

//below statement convert number into string and then ccalculates its length
console.log(balance.toString().length);

//tofixed method rounds the number to the specified number of decimal places.
//It returns the result as a string, not a number.
console.log(balance.toFixed(2));

//below code converts the number into the string with the readable format in indian version
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-in'));


