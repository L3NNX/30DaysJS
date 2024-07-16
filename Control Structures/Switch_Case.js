var prompt = require('prompt-sync')();

// Determine the day of the week using a switch statement
let num = Number(prompt("Enter a number 0-7:"));

switch (num) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednessday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        break;
}


// Assign grade based on the score using a switch statement
let score = Number(prompt("Enter your score (0-100):"));

let grade;
switch (true) {
  case (score >= 90):
    grade = "A";
    break;
  case (score >= 80):
    grade = "B";
    break;
  case (score >= 70):
    grade = "C";
    break;
  case (score >= 60):
    grade = "D";
    break;
  case (score >= 0):
    grade = "F";
    break;
  default:
    grade = "Invalid score. Please enter a number between 0 and 100.";
}

console.log("Your grade is:", grade);
