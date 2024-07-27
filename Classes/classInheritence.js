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

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // Call the constructor of the Person class
        this.studentId = studentId; // Initialize the studentId property
    }

    // Override the greet method
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `My student ID is ${this.studentId}.`;
    }
}

// Create an instance of the Student class
const student = new Student("Alice Smith", 20, "S12345");

console.log(student.getStudentId());
console.log(student.greet());
