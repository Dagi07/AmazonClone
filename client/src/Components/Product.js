import React from "react";
import "./Product.css";

function Product({ title, price, rating, productImg }) {
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
        <div className="rating">{rating}</div>
        <div className="imgBtn">
          <img className="productImg" src={productImg} />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
