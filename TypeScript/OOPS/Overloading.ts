// function overloading in typescript
// step 1: create multiple functions with the same name but different parameters
// step 2: keep the overloaded functions without implementation
// step 3: implement the functions by another function
export {};
function add(a: number, b: number): number;

function add(a: number, b: string): any;

function add(a: any, b: any): any {
  return a + b;
}

let r1 = add(10, 20);
console.log(r1);
let r2 = add(10, "bangalore");
console.log(r2);
