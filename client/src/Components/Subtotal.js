import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items) :{" "}
        <strong>
          <small>$</small>0
        </strong>
      </p>
      <p className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
