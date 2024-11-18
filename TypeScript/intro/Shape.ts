export {};
class Shape {
  length: number;
  breadth: number;
  constructor(length: number, breadth: number) {
    this.length = length;
    this.breadth = breadth;
  }

  Area() {
    return this.length * this.breadth;
  }
  Perimeter() {
    return 2 * (this.length + this.breadth);
  }
}

let square = new Shape(4, 4);
console.log(`Area of square is: ${square.Area()}`);
console.log(`Perimeter of square is: ${square.Perimeter()}`);

let rectange = new Shape(10, 5);
console.log(`Area of rectangle is: ${rectange.Area()}`);
console.log(`Perimeter of rectangle is: ${rectange.Perimeter()}`);
