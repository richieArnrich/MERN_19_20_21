import React, { Component } from "react";

class ClassForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
        <h1>Hi my name is: {this.state.name}</h1>
        <h2>I have entered: {this.state.name.length}</h2>
      </div>
    );
  }
}

export default ClassForm;
