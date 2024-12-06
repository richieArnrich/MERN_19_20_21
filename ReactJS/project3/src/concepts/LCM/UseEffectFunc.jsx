import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function UseEffectFunc() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Displaying data from external resource in a function component</h1>
      {people.map((person, index) => {
        return <div key={index}>{person.name}</div>;
      })}
    </div>
  );
}

export default UseEffectFunc;
