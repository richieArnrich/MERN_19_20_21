let obj = {
  name: "Sachit",
  age: 20,
  contact: 123456,
};
console.log(obj);
console.log("---------------------------");
// add a new property birthplace for the obj
obj.birthplace = "Chennai";
console.log(obj);

// delete the contact property from obj
delete obj.contact;

console.log(obj);

Object.seal(obj);

// obj.email = "sachit@gmail.com"; cannot add new property after seal()
console.log(obj);
obj.name = "Shankar";
console.log(obj);

Object.freeze(obj);
obj.name = "Sachit"; //cannot modify the present data after freeze()
console.log(obj);

let output = Object.entries(obj);
console.log(output);

const items = [{ pen: 80 }, { book: 20 }, { bag: 150 }, { pencil: 30 }];
//output:  items that sum upto 100 : pen : 80 and book : 20
