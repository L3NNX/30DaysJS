//Array Methods Map,filter,reduce
var prompt = require('prompt-sync')();

// Example: Map method to double each number in an array
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log('Original array:', numbers);        
console.log('Doubled array:', doubledNumbers);   



// Example: Filter method to find all even numbers in an array
const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

function evenNum(num) {
    return num % 2 === 0;
}

const evenNumbers = num.filter(evenNum)
console.log(evenNumbers)


// Example: Reduce method to calculate the sum of an array

const arr = [1, 2, 3, 4, 5];

// Use reduce() to calculate the sum of the array
const sum = arr.reduce((initialValue, currentValue) => {
    return initialValue + currentValue; // Add current value to the accumulator
}); // Initial value of the accumulator is set to 0

console.log("The sum of the array is:", sum); 
