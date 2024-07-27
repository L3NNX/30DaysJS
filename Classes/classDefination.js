class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Create an instance of the class
const person = new Person("John Doe", 30);


console.log(person.greet());

console.log(person);

// Update the age
person.updateAge(31);

console.log(person);

