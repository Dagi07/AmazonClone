import React from "react";
import "./InBasketProd.css";
import { useStateValue } from "./StateProvider";

function InBasketProd({ id, title, price, rating, productImg, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const rmvFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="inBasket">
      <div class="image">
        <img className="productImg" src={productImg} />
      </div>
      <div class="prodInfo">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <div className="price">
          <small>$</small>
          <h3>{price}</h3>
        </div>
        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))}
        </div>
        <div class="btn">
          {!hideButton && (
            <button onClick={rmvFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InBasketProd;
