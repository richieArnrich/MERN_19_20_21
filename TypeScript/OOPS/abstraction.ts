// abstraction is the process of hiding the implementation and providing only the
// functionality
// How to implement:
// 1. Define an abstract class (cannot be instantiated/create an object)
// 2. Define abstract functions (do not have function body)
// 3. Create a concrete class that inherits from the abstract class
// 4. Implement the abstract functions in the concrete class

abstract class MyClass1 {
  abstract up(): void;
  abstract down(): void;
  run() {
    // concrete functions
    console.log("running");
  }
}
class SubClass extends MyClass1 {
  up(): void {
    console.log("Going Up");
  }
  down(): void {
    console.log("Going Down");
  }
}
// let obj1 = new MyClass1();
// Error: Cannot create an instance of an abstract class.
// obj1.up(); // Error: Property 'up' in type 'MyClass1' is
// abstract and must be implemented in the subclass.

let myObj: SubClass = new SubClass();
myObj.up(); // Output: Going Up
myObj.down(); // Output: Going Down
