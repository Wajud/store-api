//async errors
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const productsRouter = require("./routes/products");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(
    `<h1>Store API</h1><br/><a href="/api/v1/products">Products Route</a>`
  );
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = () => {
  connectDB(process.env.MONGODB_URI)
    .then(() => {
      console.log("Successfully connected to DB...");
      app.listen(5050, () => {
        console.log("Server is running on Port 5050");
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

start();
