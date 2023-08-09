import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Product({ id, title, price, rating, productImg }) {
  const [{ basket, user }, dispatch] = useStateValue();
  // dispatch: used to push to the dataLayer

  const history = useNavigate();

  // console.log("this is the basket", basket);
  const addToBasket = () => {
    if (!user) {
      history("login");
    } else {
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
    }
  };
  return (
    <div className="product">
      {/* <div className="product">
        <div className="product_info">
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
        </div>

        <div className="imgBtn">
          <img className="productImg" src={productImg} />
          <button onClick={addToBasket}>Add to Basket</button>
        </div>
      </div> */}
      {/* <div > */}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={productImg} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
      {/* </div> */}
    </div>
  );
}

export default Product;
