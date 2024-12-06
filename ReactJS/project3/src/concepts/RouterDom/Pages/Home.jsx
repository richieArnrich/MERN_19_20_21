import React, { useState } from "react";

function Home() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h1>Hello My name is {name}</h1>
      </form>
    </div>
  );
}

export default Home;
