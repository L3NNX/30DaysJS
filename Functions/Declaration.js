var prompt = require('prompt-sync')();

function odd_even(num) {
    if (num % 2 === 0) {
        return "The number is even.";
      } else {
        return "The number is odd.";
      }
    
}

console.log(odd_even(88)); 


function squareNum(num1) {
    return num1 * num1;
}

console.log(squareNum(8));