function outerFunction(value) {
    const message = `The value is: ${value}`;

    return function innerFunction() {
        console.log(message);
    };
}

const access = outerFunction('Hello, world!');
access();




// Define a function that creates a private counter
function createCounter() {
    
    let count = 0;
  
    // Return an object with methods to increment and get the counter value
    return {
      // Method to increment the counter
      increment: function() {
        count++;
      },
      // Method to get the current value of the counter
      getValue: function() {
        return count;
      }
    };
  }
  
  // Create a new counter instance
  const counter = createCounter();
  
  // Increment the counter a few times
  counter.increment();
  counter.increment();
  
 
  console.log(counter.getValue()); 
  
 
  counter.increment();
  
  console.log(counter.getValue());
  