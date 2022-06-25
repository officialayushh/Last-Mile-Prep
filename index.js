// Javascript

// What is the Difference between == vs === ?
var num1 = 5;
var num2 = '5';
console.log(typeof(num1));
console.log(typeof(num2));
console.log(num1 == num2 );  //Check Only Value,
// console.log(num2);
console.log(num1 === num2 ); // Also check datatype and also value,


// Difference between null vs undefined? 
var iAmUseless = null;  // Given Any Value Null
console.log(iAmUseless);
console.log(typeof(iAmUseless));//Bug

var iAmStandBy;  // Not given any value is undefined
console.log(iAmStandBy);
console.log(typeof(iAmStandBy));


// What is hoisting ?
