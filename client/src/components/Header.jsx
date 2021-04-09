import React from "react";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">
                <img
                  src="https://cdn0.iconfinder.com/data/icons/money-banking-filled-outline/32/Money__Bank_icon_filled_line_style_32px_for_sale_shopping_bag_Purchase_E-Commerce_-512.png"
                  width="40"
                  height="40"
                  alt="shopping"
                ></img>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/history">
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
