// function overloading in typescript
// step 1: create multiple functions with the same name but different parameters
// step 2: keep the overloaded functions without implementation
// step 3: implement the functions by another function
function add(a, b) {
    return a + b;
}
var r1 = add(10, 20);
console.log(r1);
var r2 = add(10, "bangalore");
console.log(r2);
