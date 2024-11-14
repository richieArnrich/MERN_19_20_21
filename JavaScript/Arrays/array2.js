//  create an array
let fruits = ["Apple", "Mango", "Banana", "Orange"];
document.write("original array: " + fruits + "<br>");
document.write("<br>-----------------------<br>");
// add new element at the end of the array
fruits.push("Grapes");
document.write(fruits + "<br>");
document.write("<br>-----------------------<br>");

// add new element at the begining of the array
fruits.unshift("Cherry");
document.write(fruits + "<br>");
document.write("<br>-----------------------<br>");

// add elements at index 2 of the array
fruits.splice(2, 0, "Pineapple");
document.write(fruits + "<br>");
// syntax of splice
// splice(index, how many elements to delete, item1, item2, item3)
document.write("<br>-----------------------<br>");

// delete an element at the last of the array
fruits.pop();
document.write(fruits + "<br>");
document.write("<br>-----------------------<br>");

// delete an element at the begining of the array
fruits.shift();
document.write(fruits + "<br>");
document.write("<br>-----------------------<br>");

// delete an element at index 2 of the array
fruits.splice(2, 1);
document.write(fruits + "<br>");
document.write("<br>-----------------------<br>");
