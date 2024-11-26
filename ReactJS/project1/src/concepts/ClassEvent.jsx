import React, { Component } from "react";

class ClassEvent extends Component {
  changeContent = () => {
    let contentEle = document.getElementById("content");
    contentEle.innerHTML = "Hello, World!";
  };
  render() {
    return (
      <div>
        <h1 id="content">I am a heading i can change content</h1>
        <button onClick={this.changeContent}>Change content</button>
      </div>
    );
  }
}

export default ClassEvent;
