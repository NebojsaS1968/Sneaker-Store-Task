import React, { useState, createContext } from "react";

export const SneakerContext = createContext();

export const SneakerContextProvider = (props) => {
  const [sneakers, setSneakers] = useState([]);
  const [cart, setCart] = useState([]); // state for items in the cart
  const [historyShop, setHistoryShop] = useState([]);

  return (
    <SneakerContext.Provider
      value={{
        sneakers,
        setSneakers,
        cart,
        setCart,
        historyShop,
        setHistoryShop,
      }}
    >
      {props.children}
    </SneakerContext.Provider>
  );
};
