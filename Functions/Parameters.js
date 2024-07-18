var prompt = require('prompt-sync')();

function calcProduct(a = 1, b = 2) {
    const product = a * b;
    return product;
}

console.log(calcProduct(5, 5));


let name = String(prompt("Enter your name:"));
let age = Number(prompt("Enter your age:"));
function greetings(name, age = 10) {
    return "Good Morning, " + name;
}

console.log(greetings(name, age));