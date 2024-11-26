import React, { Component } from "react";

class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shankar",
      age: 40,
      proffession: "Singer",
    };
  }
  render() {
    return (
      <div>
        <h1>I am class component with state</h1>
        <p>
          Hi my name is {this.state.name} and age is
          {this.state.age} and I am a {this.state.proffession}
        </p>
        
      </div>
    );
  }
}

export default StateClass;
