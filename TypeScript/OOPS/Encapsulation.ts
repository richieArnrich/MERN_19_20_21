class Employee {
  private name: string;
  private contact: number;
  private salary: number;

  constructor(name: string, contact: number, salary: number) {
    this.name = name;
    this.contact = contact;
    this.salary = salary;
  }
  //   get function to access the name
  getname() {
    return this.name;
  }
  setContact(newContact: number) {
    this.contact = newContact;
    console.log("Contact updated successfully");
  }
  getContact() {
    return this.contact;
  }
  setSalary(newSalary: number) {
    this.salary = newSalary;
    console.log(this.name + " salary got updated");
  }
}

let e1 = new Employee("Rahul", 45789432, 1500);
console.log(e1.getname());
console.log(e1.getContact());
const newContact = 123456;
e1.setContact(newContact);
console.log(e1.getContact());
let newSalary = 2500;
e1.setSalary(newSalary);
