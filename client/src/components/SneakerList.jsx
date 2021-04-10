import React, { useEffect, useContext } from "react";
import SneakerAPI from "../apis/SneakerAPI";
import { SneakerContext } from "../context/SneakerContext";

const SneakerList = () => {
  // destructuring values from context API using useContext hook
  const {
    sneakers,
    setSneakers,
    cart,
    setCart,
    increaseCart,
    setOrderHistory,
    orderHistory,
  } = useContext(SneakerContext);

  // useEffect hook is for fetching the data from the server as soon as the component mount on to the screen
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SneakerAPI.get("/");
        setSneakers(response.data.data.sneakers);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const postIntoCart = async (id) => {
    try {
      const response = await SneakerAPI.post(`/cart/${id}`);
      console.log(response);
      setOrderHistory(response.data.data.new_history);
      localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
      setCart(response.data.data.new_history); // new item in cart table
      increaseCart();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = async (id) => {
    postIntoCart(id);
  };

  return (
    <div className="container d-flex flex-row">
      {sneakers.map((sneaker) => {
        return (
          <div className="sneaker p-4" key={sneaker.id}>
            <img src={sneaker.img} alt="" />
            <p>{sneaker.name}</p>
            <p>{sneaker.price} din.</p>
            <button
              onClick={() => handleAddToCart(sneaker.id)}
              className="btn btn-secondary"
            >
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SneakerList;
