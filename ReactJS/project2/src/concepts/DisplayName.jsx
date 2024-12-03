import React, { useContext } from "react";
import { NameContext } from "./NameContext";

const DisplayName = () => {
  const name = useContext(NameContext); // Consume the name from context

  return (
    <p>
      The name from context is: <strong>{name}</strong>
    </p>
  );
};

export default DisplayName;
