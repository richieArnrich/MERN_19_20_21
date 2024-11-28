import React from "react";
import ChildComp1 from "./ChildComp1";

function ParentCom1() {
  return (
    <div>
      <h1>Parent Component 1</h1>
      <ChildComp1 data="Richie" age="25" />
    </div>
  );
}

export default ParentCom1;
