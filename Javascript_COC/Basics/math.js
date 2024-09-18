console.log(Math);

//negative values are converted into positive values
console.log(Math.abs(-45));

//for round off a number 
console.log(Math.round(45.4));

//value of random is always between  0 to 1
/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random()); */
console.log(Math.floor(Math.random()* 10) +1);

//if we want values between two numbers eg. 50 to 100 then following formula can be used
const min = 50;
const max = 100;
console.log(Math.floor(Math.random() *(max-min +1)+ min));
//ceil, floor , min , max methods pahun ja !!!