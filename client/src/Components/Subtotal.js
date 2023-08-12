import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal({ no_of_items, totalPrice }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getTotalPrice = (basket) =>
    basket.reduce((accum, elem) => accum + elem.price, 0);
  // console.log(getTotalPrice(basket));
  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items) :{" "}
        <strong>
          <small>$</small>
          {getTotalPrice(basket)}
        </strong>
      </p>
      <p className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </p>
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
