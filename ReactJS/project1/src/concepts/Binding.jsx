import React, { Component } from "react";

class Binding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abhishek",
    };
    console.log(this);
    // binding the function to the state
    this.changeName = this.changeName.bind(this);
  }
  changeName() {
    this.setState({
      name: "Dhoni",
    });
  }
  render() {
    return (
      <div>
        <h1>Hi my name is: {this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default Binding;
