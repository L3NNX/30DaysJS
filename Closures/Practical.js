// Function to create a unique ID generator
function createUniqueIDGenerator() {

    let lastID = 0;
  
    // Return a function that generates a new unique ID
    return function generateUniqueID() {
      lastID++; // Increment the last ID
      return `id_${lastID}`; // Return the new unique ID
    };
  }
  
  const generateID = createUniqueIDGenerator();

  console.log(generateID()); 
  console.log(generateID()); 
  console.log(generateID()); 
  console.log(generateID()); 
  

// Function to create a greeting function with a user's name
function createGreetingFunction(userName) {
    // Return a function that greets the user
    return function greetUser() {
      console.log(`Hello, ${userName}!`);
    };
  }
  
  const aliceGreeting = createGreetingFunction("Alice");
  
  const bobGreeting = createGreetingFunction("Bob");
  
  aliceGreeting(); 
  bobGreeting(); 
  