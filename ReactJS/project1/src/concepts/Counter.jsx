import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>I have clicked {this.state.count} times</h1>
        <button onClick={this.increment}>Increase Count</button>
      </div>
    );
  }
}

export default Counter;
