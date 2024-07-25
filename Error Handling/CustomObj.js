//Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch

// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// Function that throws a custom error
function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    return "Valid input";
}

try {

    const result = validateInput("   ");
    console.log("Result:", result);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation error occurred: ", error.message);
    } else {
        console.error("An unexpected error occurred: ", error.message);
    }
} finally {
    console.log("Validation process completed.");
}



//Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom

// Custom error class for validation errors
class InputValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InputValidationError";
    }
}

function validateUserInput(input) {
    if (typeof input !== 'string' || input.trim() === "") {
        throw new InputValidationError("Input must be a non-empty string.");
    }
    return "Input is valid.";
}

try {
    const userInput = "   "; // Change this to test different inputs
    console.log("Validating user input...");
    const result = validateUserInput(userInput);
    console.log("Result:", result);
} catch (error) {
    if (error instanceof InputValidationError) {
        console.error("Validation error occurred: ", error.message);
    } else {
        console.error("An unexpected error occurred: ", error.message);
    }
} finally {
    console.log("Finally block executed.");
}
