class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  employeeId: number;
  Salary: number;

  constructor(name: string, age: number, employeeId: number, Salary: number) {
    super(name, age);
    this.employeeId = employeeId;
    this.Salary = Salary;
  }
  printDetails() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.employeeId);
    console.log(this.Salary);
  }
}

let emp1: Employee = new Employee("Don", 24, 123, 1200);
emp1.printDetails();
