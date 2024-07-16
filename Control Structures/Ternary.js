var prompt = require('prompt-sync')();


// Determine if the number is even or odd using the ternary operator
let number = Number(prompt("Enter a number:"));

let evenOrOdd = (number % 2 === 0) ? "even" : "odd";

console.log("The number is", evenOrOdd);


// Determine if the year is a leap year
let year = Number(prompt("Enter a year:"));

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log("The year " + year + " is a leap year " );

