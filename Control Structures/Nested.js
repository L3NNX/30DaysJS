var prompt = require('prompt-sync')();
// Get user input
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));

// Find the largest number
if (num1 >= num2) {
  if (num1 >= num3) {
    console.log("The largest number is: " + num1);
  } else {
    console.log("The largest number is: " + num3);
  }
} else {
  if (num2 >= num3) {
    console.log("The largest number is: " + num2);
  } else {
    console.log("The largest number is: " + num3);
  }
}
