function fibonacci(n) {
    // Base case: Fibonacci of 0 is 0, Fibonacci of 1 is 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
const testCases = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Logging results
testCases.forEach(caseNum => {
    const result = fibonacci(caseNum);
    console.log(`Fibonacci of ${caseNum} is: ${result}`);
});
