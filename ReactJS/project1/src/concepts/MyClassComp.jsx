// import React package
// create a js class with render() which returns 1 jsx
// export the class from the current file
// import the class into App.jsx

import React, { Component } from "react";
class MyClassComp extends Component {
  render() {
    return (
      <div>
        <h1>This is my first class component</h1>
      </div>
    );
  }
}

export default MyClassComp;
