class OverloadFn {
  add(a: number, b: number): number;

  add(a: string, b: number): string;

  add(a: any, b: any): any {
    return a + b;
  }
}

let obj1 = new OverloadFn();

let r1 = obj1.add(10, 20);
console.log(r1);
let r2 = obj1.add("Delhi", 40);
console.log(r2);
