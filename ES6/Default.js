// Function to calculate the product of two numbers
function multiply(a, b = 1) {
    return a * b;
}

const resultWithBoth = multiply(5, 3); 

const resultWithDefault = multiply(5); 

console.log("Result with both parameters:", resultWithBoth);
console.log("Result with default parameter:", resultWithDefault);
