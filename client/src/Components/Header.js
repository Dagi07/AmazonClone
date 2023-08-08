import React, { useState } from "react";
import amazonLogo from "../images/amazon-png-logo-vector-1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <header>
      <Link to="/">
        <div className="header_logo">
          <img className="amazon-logo" src={amazonLogo} />
        </div>
      </Link>
      <div className="header_search">
        <input className="search_input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <nav>
        <div className="header_options">
          <span>Hello, Guest</span>
          <span>
            {" "}
            <strong>Sign in</strong>{" "}
          </span>
        </div>
        <div className="header_options">
          <span>Returns </span>
          <span>
            <strong> & Orders</strong>
          </span>
        </div>
        <div className="header_options">
          <span>Your </span>
          <span>
            <strong> Prime</strong>
          </span>
        </div>
        <Link to="/checkout">
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="basket_count">
              <small> {basket.length}</small>
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
