var Employee = /** @class */ (function () {
    function Employee(name, contact, salary) {
        this.name = name;
        this.contact = contact;
        this.salary = salary;
    }
    //   get function to access the name
    Employee.prototype.getname = function () {
        return this.name;
    };
    Employee.prototype.setContact = function (newContact) {
        this.contact = newContact;
        console.log("Contact updated successfully");
    };
    Employee.prototype.getContact = function () {
        return this.contact;
    };
    Employee.prototype.setSalary = function (newSalary) {
        this.salary = newSalary;
        console.log(this.name + " salary got updated");
    };
    return Employee;
}());
var e1 = new Employee("Rahul", 45789432, 1500);
console.log(e1.getname());
console.log(e1.getContact());
var newContact = 123456;
e1.setContact(newContact);
console.log(e1.getContact());
var newSalary = 2500;
e1.setSalary(newSalary);
