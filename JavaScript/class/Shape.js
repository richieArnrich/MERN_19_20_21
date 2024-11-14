class Shape {
  constructor(length, breadth) {
    this.length = length;
    this.breadth = breadth;
  }

  areaOfShape() {
    return this.length * this.breadth;
  }

  perimeter() {
    return 2 * (this.length + this.breadth);
  }
}

let shape1 = new Shape(4, 4);
document.write("area of shape1: " + shape1.areaOfShape() + "<br>");
document.write("perimeter of shape1: " + shape1.perimeter() + "<br>");
// Object.keys()
// Object.values()