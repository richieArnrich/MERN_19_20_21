import React from "react";
import MyConsumer from "./MyConsumer";

function CompX() {
  return (
    <div>
      <h1>Compo X</h1>
      <MyConsumer>
        {(data) => {
          <div>{data}</div>;
        }}
      </MyConsumer>
    </div>
  );
}

export default CompX;
