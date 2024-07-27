class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter method to return the full name
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter method to update the name properties
    set name(newName) {
      const [firstName, lastName] = newName.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  

  const person1 = new Person("John", "Doe");

  console.log(person1.fullName); 

  person1.name = "Jane Smith";
  

  console.log(person1.fullName); 
  