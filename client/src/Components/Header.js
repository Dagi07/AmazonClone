import React from "react";
import amazonLogo from "../images/amazon-png-logo-vector-1.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header_logo">
        <img className="amazon-logo" src={amazonLogo} />
      </div>
      <div className="header_search">
        <input className="search_input" type="text" />
        <SearchIcon className="search-icon"/>
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
      <div className="header_basket">
        <ShoppingBasketIcon/> 
        <span className="basket_count"><small> 0</small></span>
      </div>
     </nav>

    </header>
  );
}

export default Header;
