//following values considered as false in js
//these values are known as falsy values and it is generally used in if else condition

//	1.	false - the boolean false
//	2.	0 - the number zero
//	3.	"" - an empty string
//	4.	null - absence of any value
//	5.	undefined - a variable that hasn’t been assigned a value
//	6.	NaN - “Not-a-Number” value
//  7. BigInt 0n

//eg ----->  IMP ---> (-0 also treated as falsy ) 

if (-0) {
    console.log("This will not be executed because -0 is falsy.");
  } else {
    console.log("0 is falsy.");
  }


 //Truthy values ------------->
 //Any value that is not falsy is considered truthy. This includes:

//	•	Non-zero numbers (positive or negative)
//	•	Non-empty strings
//	•	Objects and arrays (even if empty)
//	•	The boolean true
 
//eg ------>

if ("hello") {
    console.log("This will be executed because 'hello' is truthy.");
  }

  //----------------------------------------------------------

  //The nullish coalescing operator (??) in JavaScript is used to provide a default value when dealing with null or undefined. 
  //It returns the right-hand side operand when the left-hand side operand is either null or undefined;
  //otherwise, it returns the left-hand side operand.

  //let result = value1 ?? value2;
  
 //If value1 is null or undefined, it returns value2.
//If value1 is any other value (including falsy values like 0, false, or ""), it returns value1.

let val = 5 ?? 10; 
console.log(val);

//ternary operator

//condition ? expressionIfTrue : expressionIfFalse;

let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);  // Output: "Yes, you can vote."