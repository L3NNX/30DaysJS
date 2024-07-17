var prompt = require('prompt-sync')();

//Print 1-10
let i=1;

for (i = 1; i <= 10; i++) {
    console.log(i);
}


//Multiplicaltion table of a number
let num=Number(prompt("Enter a number:"));

console.log("Multiplication table of "+num+ " is:");
for (let i = 1; i <= 10; i++) {
    console.log(num*i)
  }