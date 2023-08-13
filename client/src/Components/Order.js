import React from "react";
import "./Order.css";
import InBasketProd from "./InBasketProd";
import { NumericFormat } from "react-number-format";
import moment from "moment";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((elem) => (
        <InBasketProd
          id={elem.id}
          title={elem.title}
          price={elem.price}
          rating={elem.rating}
          productImg={elem.productImg}
          hideButton
        />
      ))}
      <NumericFormat
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
        renderText={(value) => <h3>Order Total: {value}</h3>}
        decimalScale={2}
      />
    </div>
  );
}

export default Order;
