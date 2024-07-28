// Create an array to hold the functions
const functionsArray = [];

// Loop to create functions
for (let i = 0; i < 5; i++) {
  // Create a function that logs its index
  functionsArray[i] = (function(index) {
    return function() {
      console.log(`Function index: ${index}`);
    };
  })(i); // Immediately invoke the function with the current index
}

// Call each function in the array
functionsArray.forEach(func => func());
