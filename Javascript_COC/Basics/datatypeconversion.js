let score = "30";
console.log(typeof(score));
console.log(score);

//datatype of score is string but we want to convert it into the number so ,
let convertNum = Number(score)
console.log(typeof(convertNum));

//if we convert any string into number which is not a perfect number then
//js converts it into the number but while priting it gives the value NaN(not a number)
//"23" = 23
//"34" = NaN
//true = 1 , false = 0

/*
let points ="5s";
let numpoints = Number(points);
console.log(typeof(numpoints));
console.log(numpoints); */
 
let isLoggedin = 1;
let boolisLoggedin = Boolean(isLoggedin)
console.log(boolisLoggedin);

//above conversion prints true if the value is not zero , if 0 then it prints false
// " " = false;
// "sp" = true