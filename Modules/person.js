// Create a person object with properties and methods
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // Export the person object
  module.exports = person;
  