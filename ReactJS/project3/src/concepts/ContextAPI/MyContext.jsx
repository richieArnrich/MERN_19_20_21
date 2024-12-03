// create a context
import React from "react";

export const MyContext = React.createContext();
export const MyProvider = ({ children }) => {
  const data = "Hello everyone I am data that needs to be passed";
  return (
    <>
      <MyContext.Provider value={data}>{children}</MyContext.Provider>
    </>
  );
};
