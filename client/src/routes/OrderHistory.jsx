import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import { SneakerContext } from "../context/SneakerContext";

const OrderHistory = () => {
  const { orderHistory, setOrderHistory, finalPrice } = useContext(
    SneakerContext
  );

  useEffect(() => {
    const showHistory = () => {
      setOrderHistory(JSON.parse(localStorage.getItem("orderHistory")));
      console.log(orderHistory);
    };
    showHistory();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart">
          <h4>Items in history:</h4>
          {orderHistory.map((item) => {
            return (
              <div className="cart-item p-4" key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <p>{item.price} din.</p>
              </div>
            );
          })}
          <h4>Final price is: {finalPrice()} din.</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
