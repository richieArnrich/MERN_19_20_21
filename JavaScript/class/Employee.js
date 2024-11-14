class Employee {
  name;
  age;
  salary;
  contact;

  //   constructor: assign values for the class attributes
  constructor(name, age, salary, contact) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.contact = contact;
  }

  printDetails() {
    document.write("Name: " + this.name + "<br>");
    document.write("age: " + this.age + "<br>");
    document.write("salary: " + this.salary + "<br>");
    document.write("contact: " + this.contact + "<br>");
  }
}

// create an object for Employee
let employee1 = new Employee("Harsha", 24, 1000, 123467);
employee1.printDetails();
let employee2 = new Employee("Amith", 26, 1500, 8975421);
employee2.printDetails();

// create a class shape and provide length and breadth. Create a function to find the area and perimeter of the shape
// consider the shapes to be rectangle and square


