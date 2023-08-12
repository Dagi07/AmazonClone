/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

//MIDDLEWARES
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hellow world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  // 201: Ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//LISTEN COMMAND
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-d5dd5/us-central1/api
