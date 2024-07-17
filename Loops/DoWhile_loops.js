
//1-5 print doWhileStatement
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);



// factorial of Number
let num = 5; 

let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

console.log("The factorial of", num, "is:", factorial);
