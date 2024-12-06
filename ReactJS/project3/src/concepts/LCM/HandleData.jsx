import React, { Component } from "react";
import axios from "axios";
class HandleData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({
          people: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  displayUserName() {
    return this.state.people.map((person, index) => {
      return <div key={index}>{person.name}</div>;
    });
  }
  render() {
    return (
      <div>
        <h1>Capture Data from an external resource</h1>
        {/* {console.log(this.state.people)} */}
        {this.displayUserName()}
      </div>
    );
  }
}

export default HandleData;
