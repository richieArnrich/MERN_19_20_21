class Engine {
  power: number;
  cc: number;

  constructor(power: number, cc: number) {
    this.power = power;
    this.cc = cc;
  }
}

class Car {
  color: string;
  type: string;
  seats: number;
  engine: Engine;

  constructor(color: string, type: string, seats: number, engine: Engine) {
    this.color = color;
    this.type = type;
    this.seats = seats;
    this.engine = engine;
  }
  printDetails() {
    console.log("Car Details:");
    console.log(this.color);
    console.log(this.type);
    console.log(this.seats);
    console.log("Engine of the car:");
    console.log(this.engine.power);
    console.log(this.engine.cc);
  }
}

let car1: Car = new Car("red", "suv", 7, new Engine(12, 1500));
car1.printDetails();

// bring out a relationship between user and a bank
// initialise the user object when the bank
//  object is initialise
