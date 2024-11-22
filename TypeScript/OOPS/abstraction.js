// abstraction is the process of hiding the implementation and providing only the
// functionality
// How to implement:
// 1. Define an abstract class (cannot be instantiated/create an object)
// 2. Define abstract functions (do not have function body)
// 3. Create a concrete class that inherits from the abstract class
// 4. Implement the abstract functions in the concrete class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
    }
    return MyClass1;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubClass.prototype.up = function () {
        console.log("Going Up");
    };
    SubClass.prototype.down = function () {
        console.log("Going Down");
    };
    return SubClass;
}(MyClass1));
// let obj1 = new MyClass1();
// Error: Cannot create an instance of an abstract class.
// obj1.up(); // Error: Property 'up' in type 'MyClass1' is
// abstract and must be implemented in the subclass.
var myObj = new SubClass();
myObj.up(); // Output: Going Up
myObj.down(); // Output: Going Down
