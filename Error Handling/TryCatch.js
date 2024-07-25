function throwError() {
    throw new Error("This is a deliberate error!");
}

try {
    throwError();
} catch (error) {
    console.error("An error occurred: ", error.message);
}



function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return numerator / denominator;
}

try {
    const result = divideNumbers(10, 0); 
    console.log("Result:", result);
} catch (error) {
    console.error("An error occurred: ", error.message);
}
