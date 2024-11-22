class Myfather {
  house() {
    console.log("My father built a house in red color");
  }
}

class Son extends Myfather {
  house() {
    console.log("Son changes the color to blue");
  }
}

let s = new Son();
s.house();
