// Creating an object using enhanced object literals
const person = {
    name: "Alice",
    age: 30,
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    },
  
    say() {
        console.log("I am a person.");
      }
  };
  
  console.log(person.name); 
  console.log(person.age); 
  person.greet(); 
  person.say(); 
  


// Variables for dynamic property names
const firstName = "Alice";
const lastName = "Smith";

// Creating an object with computed property names
const persons = {
    [firstName]: "Engineer",
    [lastName]: "Designer",
    age: 30,
};

// Logging the object to the console
console.log(persons);
