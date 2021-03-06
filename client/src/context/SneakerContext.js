import React, { useState, createContext, useEffect } from "react";

export const SneakerContext = createContext();

export const SneakerContextProvider = (props) => {
  const [sneakers, setSneakers] = useState([]);
  const [cart, setCart] = useState([]); // state for items in the cart
  const [cartSize, setCartSize] = useState(0, () => {
    const localCartData = localStorage.getItem("cartSize");
    return localCartData ? JSON.parse(localCartData) : 0;
  }); // state for the number of the items in the cart
  const [orderHistory, setOrderHistory] = useState([], () => {
    const localData = localStorage.getItem("orderHistory");
    return localData ? JSON.parse(localData) : [];
  }); // state for items in history page

  useEffect(() => {
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
    localStorage.setItem("cartSize", JSON.stringify(cartSize));
  }, [orderHistory, cartSize]);

  const increaseCart = () => {
    setCartSize(cartSize + 1);
  };

  // Calculate the price
  const finalPrice = () => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
      result = result + Number(cart[i].price);
    }
    return result;
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
        orderHistory,
        setOrderHistory,
        finalPrice,
      }}
    >
      {props.children}
    </SneakerContext.Provider>
  );
};
