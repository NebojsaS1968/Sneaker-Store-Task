import React, { useEffect, useContext } from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import SneakerAPI from "../apis/SneakerAPI";
import { SneakerContext } from "../context/SneakerContext";

const UserCheckout = () => {
  const history = useHistory();

  const { cart, setCart, setCartSize, finalPrice } = useContext(SneakerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await SneakerAPI.get("/cart");
        setCartSize(response.data.data.sneakers_history.length);
        setCart(response.data.data.sneakers_history);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SneakerAPI.delete("/deleteCart");
      setCartSize(0);
    } catch (err) {
      console.log(err);
    }
    history.push("/");
  };

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart">
          <h4>Items for purchase:</h4>
          {cart.map((item) => {
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
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
          <button className="btn btn-primary">Confirm</button>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleBack}
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserCheckout;
