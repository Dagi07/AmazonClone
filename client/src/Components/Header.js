import React, { useState } from "react";
import amazonLogo from "../images/amazon-png-logo-vector-1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

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
        <Link
          to={!user && "login"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <div onClick={handleAuth} className="header_options">
            <span>Hello, {!user ? "Guest" : user?.email} </span>

            <span>
              {" "}
              <strong> {!user ? "Sign in" : "Sign out"} </strong>{" "}
            </span>
          </div>
        </Link>
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
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header_basket">
            <ShoppingBasketIcon />
            <span className="basket_count">
              <small> {!user ? 0 : basket.length}</small>
            </span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
