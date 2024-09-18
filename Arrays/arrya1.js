//In js multiple typees of elements can be inserted into an array
//it is resizable

//array declaration 
//1
const arr1 = [12,32,43,54]

//2
const arr2 = new Array(32,53,64,37)

//extraction of elements in array ---->

//console.log(arr1[2]);
//console.log(arr2[1]);

//array methods ---->

//arr1.push(100)  //add the element into the array at last
//arr2.pop()      //remove the last element of the array 
//same if we use shift instead of unshift then the first element of an array is get remove

//console.log(arr1);
//console.log(arr2);

//console.log(arr1.unshift(10));     //adds the element at starting of the array(but not preferable)

//console.log(arr1);

console.log(arr1.indexOf(12));
console.log(arr1.includes(43));

const newarr = ["ram" , "sham", "radha" , "krishna"]

const latest = newarr.join()  //this method coverts the arr into the string seperated by commas 
console.log(latest);

//slice and splice 

let arr3 = [11,22,33,44,55,66,77,88]

console.log(arr3.slice(1,4));
console.log("Original array" , arr3); //no change in original array by slice

console.log(arr3.splice(1,4));
console.log("original aarray" , arr3);  //splice splits the given array into 2 parts , one is depends upon our ip and other is remaining