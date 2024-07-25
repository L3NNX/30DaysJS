function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

try {
    const result = divideNumbers(10, 0); 
    console.log("Result:", result);
} catch (error) {
    console.error("An error occurred: ", error.message);
} finally {
    console.log("Cleanup or final actions can be performed here.");
}
