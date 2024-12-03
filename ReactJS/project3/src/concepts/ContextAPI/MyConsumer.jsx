import React from "react";
import { MyContext } from "./MyContext";
function MyConsumer() {
  return <MyContext.Consumer>{(data) => <div>{data}</div>}</MyContext.Consumer>;
}

export default MyConsumer;
