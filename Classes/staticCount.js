class Student {
    static totalStudents = 0;
  
    constructor(name, age) {
      this.name = name;
      this.age = age;
  
      Student.totalStudents++;
  
      console.log(`Total students created: ${Student.totalStudents}`);
    }
  
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
  }
  
  // Create instances of the Student class
  const student1 = new Student("Alice", 20);
  const student2 = new Student("Bob", 22);
  const student3 = new Student("Charlie", 21);
  