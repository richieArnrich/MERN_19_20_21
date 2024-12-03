import React, { createContext } from "react";

// Create Context
export const NameContext = createContext();

// Create a provider component
export const NameProvider = ({ children }) => {
  const name = "John Doe"; // Name to share

  return <NameContext.Provider value={name}>{children}</NameContext.Provider>;
};
