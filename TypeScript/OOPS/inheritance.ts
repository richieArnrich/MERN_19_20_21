// The phenomenon of acquiring the super class properties into the child class : inheritance
// The child class can access the properties of the parent class
// It is designated using the keyword: extends
export {};
class Person {
  name: string;
  age: number;
}

class Employee extends Person {
  eId: number;
  eSalary: number;

  printDetails() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.eId);
    console.log(this.eSalary);
  }
}

let emp1 = new Employee();
emp1.name = "Deepak";
emp1.age = 28;
emp1.eId = 101;
emp1.eSalary = 50000;

emp1.printDetails();
