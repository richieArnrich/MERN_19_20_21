import React from "react";

function InputLength() {
  const [name, setName] = React.useState("");
  const [length, setLength] = React.useState(0);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
          console.log(name.split(" ").join("").length);
          setLength(name.split(" ").join("").length);
        }}
      />
      <p>Name is: {name}</p>
      <p>Input length: {name.length}</p>
      <p>Input length without space: {length}</p>
    </div>
  );
}

export default InputLength;

