import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, productImg }) {
  const [{ basket }, dispatch] = useStateValue();
  // dispatch: used to push to the dataLayer

  // console.log("this is the basket", basket);
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        productImg,
        price,
        rating,
      },
    });
  };
  return (
    <div>
      <div className="product">
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
        <div className="imgBtn">
          <img className="productImg" src={productImg} />
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
