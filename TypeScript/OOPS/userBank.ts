class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Bank {
  accNo: number;
  ifsc: string;
  address: string;
  user: User;

  constructor(accNo: number, ifsc: string,
     address: string, user: User) {
    this.accNo = accNo;
    this.ifsc = ifsc;
    this.address = address;
    this.user = user;
  }
  printDetails() {
    console.log(`Account Number: ${this.accNo}`);
    console.log(`IFSC Code: ${this.ifsc}`);
    console.log(`Address: ${this.address}`);
    console.log(`User name: ${this.user.name}`);
    console.log(`User age: ${this.user.age}`);
  }
}
let b1: Bank = new Bank(
  12345,
  "123Abc000",
  "Bangalore",
  new User("Sarvanan", 22)
);
b1.printDetails();
