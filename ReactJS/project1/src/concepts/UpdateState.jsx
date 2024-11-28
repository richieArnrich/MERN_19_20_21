import React, { Component } from "react";

class UpdateState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Virat Kohli",
      age: 40,
    };
  }

  updateState = () => {
    this.setState({
      name: "Rohit Sharma",
      age: 45,
    });
  };
  render() {
    return (
      <div>
        <h1>
          My name is {this.state.name} and {this.state.age}
        </h1>
        <button onClick={this.updateState}>Change Name</button>
      </div>
    );
  }
}

export default UpdateState;
