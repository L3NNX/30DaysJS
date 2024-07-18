var prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter 1st Number:"));
let num2 = Number(prompt("Enter 2nd Number:"));

let sumOfNumbers = (a, b) => a + b;

console.log(sumOfNumbers(num1, num2));


function containsChar(str, char) {
    return str.indexOf(char) !== -1;
}

console.log(containsChar("Hello, World!", "o")); 
console.log(containsChar("JavaScript", "x"))