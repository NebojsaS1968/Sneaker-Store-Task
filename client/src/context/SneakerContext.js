import React, { useState, createContext } from "react";

export const SneakerContext = createContext();

export const SneakerContextProvider = (props) => {
  const [sneakers, setSneakers] = useState([]);

  return (
    <SneakerContext.Provider value={{ sneakers, setSneakers }}>
      {props.children}
    </SneakerContext.Provider>
  );
};
