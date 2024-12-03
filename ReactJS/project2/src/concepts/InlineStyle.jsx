import React from "react";
import "../styles/ExternalCss.css";
function InlineStyle() {
  // internal css in react is done using style object
  const myStyles = {
    backgroundColor: "yellow",
    color: "green",
  };
  return (
    <div>
      <h1
        style={{
          color: "purple",
          backgroundColor: "#E6E4E4",
          textAlign: "center",
        }}
      >
        Welcome to styling in react js
      </h1>
      <p style={myStyles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        repellendus reprehenderit animi unde optio nostrum, distinctio expedita
        id dolorem soluta esse ullam architecto ratione culpa dolores qui
        officiis tenetur velit? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime repellendus reprehenderit animi unde optio
        nostrum, distinctio expedita id dolorem soluta esse ullam architecto
        ratione culpa dolores qui officiis tenetur velit? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Maxime repellendus reprehenderit
        animi unde optio nostrum, distinctio expedita id dolorem soluta esse
        ullam architecto ratione culpa dolores qui officiis tenetur velit?
      </p>
      <p id="p1">I am styled using external css</p>
    </div>
  );
}

export default InlineStyle;
