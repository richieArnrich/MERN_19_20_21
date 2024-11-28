import React, { Component } from "react";

class ToggleState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Virat Kohli",
      name2: "Rohit Sharma",
      toggle: true,
    };
  }
  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    {
      console.log(this.state.toggle);
    }
    return this.state.toggle ? (
      <div>
        <h1>{this.state.name1}</h1>
        <button onClick={this.toggleState}>Change Name</button>
      </div>
    ) : (
      <div>
        <h1>{this.state.name2}</h1>
        <button onClick={this.toggleState}>Change Name</button>
      </div>
    );
  }
}

export default ToggleState;
