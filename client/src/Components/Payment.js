import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import InBasketProd from "./InBasketProd";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",

        url: `/payments/create?total=${getTotalPrice(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const getTotalPrice = (basket) =>
    basket.reduce((accum, elem) => accum + elem.price, 0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>{user?.email}</p>
          <p>Summit 30m</p>
          <p>Addis Ababa</p>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Review Items and Delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map((item) => (
            <InBasketProd
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              productImg={item.productImg}
            />
          ))}
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          <form action="">
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <NumericFormat
                value={getTotalPrice(basket)}
                displayType="text"
                thousandSeparator={true}
                prefix="$"
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
              />

              <button
                disabled={processing || disabled || succeeded}
                onClick={handleSubmit}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
