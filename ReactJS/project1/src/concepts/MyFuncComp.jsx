// step 1: import react package
// step 2: create a js function with same name as the file name
// step 3: the js function will return 1jsx at a time
// step 4: export the function from the current file
// step 5: import the function into app.jsx
import React from "react";

function MyFuncComp() {
  return (
    <div>
      <h1>This is my first react component</h1>
      <p>This is a paragraph</p>
    </div>
  );
}
export default MyFuncComp;
