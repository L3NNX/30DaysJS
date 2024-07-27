class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  static getGreeting() {
    return "Hello, how are you?";
  }
}

console.log(Person.getGreeting());
