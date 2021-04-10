import React, { useEffect, useContext, useState } from "react";
import Header from "../components/Header";
import { SneakerContext } from "../context/SneakerContext";

const OrderHistory = () => {
  const { orderHistory, setOrderHistory, finalPrice } = useContext(
    SneakerContext
  );

  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart">
          <h4>Items in history:</h4>
          <div className="cart-item p-4">
            <img src={orderHistory.img} alt="" />
            <p>{orderHistory.name}</p>
            <p>{orderHistory.price} din.</p>
          </div>
          <h4>Final price is: {finalPrice()} din.</h4>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
