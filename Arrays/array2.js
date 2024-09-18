let Marvel = ["thor" , "ironman" , "hulk"]
let bollywood = ["hanuman", "shaktiman" ,"krish" ]

//Marvel.push(bollywood); //by this method we can join two arrays 
//console.log(Marvel);

//preferable method to join an array

//let joins =Marvel.concat(bollywood);
//console.log(joins);

//most preferable method
let joinArr = [...Marvel , ...bollywood]
console.log(joinArr);


//---------------------------
console.log(Array.isArray("siddhant"));
console.log(Array.from("siddhant"));   // returns an array of given elements


let a = 20
let b= 35
let c = 67
console.log(Array.of(a,b,c));
