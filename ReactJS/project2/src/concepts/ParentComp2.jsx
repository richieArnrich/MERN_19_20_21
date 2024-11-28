import React from "react";
import ChildComp2 from "./ChildComp2";

function ParentComp2(props) {
  console.log(props);
  console.log(props.objData.name);
  let { objData } = props;
  console.log(objData.name);
  console.log(objData);
  return (
    <div>
      <h2>I am parent component 2, I send data from app to child comp 2</h2>
      <ChildComp2 superData={objData} />
    </div>
  );
}

export default ParentComp2;
