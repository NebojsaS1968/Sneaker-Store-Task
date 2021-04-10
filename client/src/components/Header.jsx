import React, { useContext } from "react";
import { SneakerContext } from "../context/SneakerContext";

const Header = () => {
  const { cartSize } = useContext(SneakerContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/checkout">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/money-banking-filled-outline/32/Money__Bank_icon_filled_line_style_32px_for_sale_shopping_bag_Purchase_E-Commerce_-512.png"
                  width="40"
                  height="40"
                  alt="shopping"
                ></img>
                <p className="cartSize">{cartSize}</p>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/history">
                Order History
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
