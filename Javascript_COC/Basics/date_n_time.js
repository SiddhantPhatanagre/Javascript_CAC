let todaysDate = new Date();
console.log(todaysDate );
console.log(todaysDate.toString()); 
console.log(todaysDate.toLocaleString());  

//date is an object
console.log(typeof todaysDate);

//for an specific date we can use the following symbol
//here we can see that months are starting from 0 = jan;
let specificDate = new Date(2020,2,2);
console.log(specificDate.toDateString());

//for this syntax the months are starting from 1=jan
let specificDate2= new Date("2025-01-2");
console.log(specificDate2.toDateString());