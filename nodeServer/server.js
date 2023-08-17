require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: "usd",
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

app.listen(6000, () => {
  console.log("listening at 6000 ...");
});
