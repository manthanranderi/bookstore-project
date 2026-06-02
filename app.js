const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded());

app.use(express.json());

app.use(express.static("public"));

app.use("/uploads", express.static("uploads"));

mongoose
  .connect("mongodb://localhost:27017/bookstore")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", require("./routes/Routers"));

app.listen(port, () => {
  console.log(`Server Running On Port ${port}`);
});