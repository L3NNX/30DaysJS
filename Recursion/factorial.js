import promptSync from 'prompt-sync';

const prompt = promptSync();
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}

function calculateFactorial() {
    const userInput = Number(prompt("Enter a non-negative integer to calculate its factorial:"));


    const result = factorial(userInput);
    console.log(`Factorial of ${userInput} is: ${result}`);

}

calculateFactorial();
