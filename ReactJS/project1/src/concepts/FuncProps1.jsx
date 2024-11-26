import React from "react";

function FuncProps1(props) {
  return (
    <div>
      <h1>Func Props 1 and I display data from app.jsx</h1>
      <p>Data passed is: {props.name}</p>
      <p>Age is {props.age}</p>
    </div>
  );
}
export default FuncProps1;
