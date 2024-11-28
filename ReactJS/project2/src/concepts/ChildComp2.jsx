import React from "react";

function ChildComp2(props) {
  console.log("props from child");
  console.log(props);
  let { superData } = props;
  console.log(superData);
  return (
    <div>
      <h3>I am child comp2, I display data from app</h3>
      <p>
        {superData.name} and {superData.age}
      </p>
    </div>
  );
}

export default ChildComp2;
