import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="row">
      <div className="section-1">
        <img src="https://gos3.ibcdn.com/bann-1553077574.jpg" />
        <div className="basket">
          <h3>Hello,</h3>
          <h2>Your shopping Basket</h2>
        </div>
      </div>
      <div className="section-2">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
