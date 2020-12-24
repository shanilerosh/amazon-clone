const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { LocalFlorist } = require("@material-ui/icons");
const stripe = require("stripe")(
  "sk_test_51I1BzlGYY0C0LQmMpGnJMkrR4jMJYkLeYK6hFlPs5a0Du5yIKD4mxY3U7OoHWGqSVxYNxOdkVdHmlrQdsCkRJPOY00OdW98LJH"
);

// Api

// config
const app = express();

// midlewares
app.use(cors({ origin: true }));
app.use(express.json());

// api route
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK-Created

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/shanil", (req, res) => {
  res.status(200).send("hello Shanil");
});

// listen
exports.api = functions.https.onRequest(app);
