import React from "react";
import "./Checkout.css";

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
        <p>
          Subtotal (0 items) :{" "}
          <strong>
            <small>$</small>0
          </strong>
        </p>
        <p>
          <input type="checkbox" /> This order contains a gift
        </p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Checkout;
