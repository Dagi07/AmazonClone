import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import InBasketProd from "./InBasketProd";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="row">
      <div className="section-1">
        <img src="https://gos3.ibcdn.com/bann-1553077574.jpg" />
        <div className="basket">
          <h3>Hello,</h3>
          <h2>Your shopping Basket</h2>
          {basket.map((elem) => (
            <InBasketProd
              id={elem.id}
              title={elem.title}
              price={elem.price}
              rating={elem.rating}
              productImg={elem.productImg}
            />
          ))}
        </div>
      </div>
      <div className="section-2">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
