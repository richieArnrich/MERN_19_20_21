import React from "react";

function ChildComp1(props) {
  console.log(props);
  return (
    <div>
      <h1>Child Component</h1>
      <p>Data from parent comp: {props.data}</p>
      <p>Data from parent comp: {props.age}</p>
    </div>
  );
}

export default ChildComp1;
