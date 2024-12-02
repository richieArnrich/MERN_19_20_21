import React from "react";

function FuncForm() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  //   handle state object inside a functional component
  return (
    <div>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
      </form>
      <div>
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
      </div>
    </div>
  );
}

export default FuncForm;
