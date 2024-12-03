// use the context using useContext()
import React from "react";
import { useContext } from "react";
import { MyContext } from "./MyContext";

function ContextUse() {
  const value = useContext(MyContext);
  //   MyContext is the name of the context we created in file MyContext.jsx

  return (
    <div>
      <h1>Context data from the provider:</h1>
      {value} , this is from contextUse file
    </div>
  );
}

export default ContextUse;
