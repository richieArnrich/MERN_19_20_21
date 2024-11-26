import React, { Component } from "react";
class ClassProps1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>I am class component, will display props from app.jsx</h3>
        <p>Name is: {this.props.name}</p>
        <p>Age is: {this.props.age}</p>
      </div>
    );
  }
}
export default ClassProps1;
