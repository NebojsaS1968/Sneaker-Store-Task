import React, { useState, createContext } from "react";

export const SneakerContext = createContext();

export const SneakerContextProvider = (props) => {
  const [sneakers, setSneakers] = useState([]);
  const [cart, setCart] = useState([]); // state for items in the cart
  const [cartSize, setCartSize] = useState(0); // state for the number of the items in the cart

  const increaseCart = () => {
    setCartSize(cartSize + 1);
  };

  return (
    <SneakerContext.Provider
      value={{
        sneakers,
        setSneakers,
        cart,
        setCart,
        cartSize,
        setCartSize,
        increaseCart,
      }}
    >
      {props.children}
    </SneakerContext.Provider>
  );
};
