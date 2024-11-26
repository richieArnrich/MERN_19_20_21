import React from "react";

function FunctEvent() {
  const myObj = {
    name: "John",
    age: 30,
    country: "India",
  };
  const newObj = {
    name: "Amith",
    age: 25,
    country: "USA",
  };
  function changeContent() {
    let contentEle = document.getElementById("content");
    contentEle.innerHTML = `Hi my name is ${newObj.name} and age is 
    ${newObj.age} and I come from ${newObj.country}`;
  }
  return (
    <div>
      <h3 id="content">
        Hi my name is {myObj.name} and I am {myObj.age} years of age and I am
        from {myObj.country}
      </h3>
      <button onClick={changeContent}>Change content</button>
    </div>
  );
}

export default FunctEvent;
