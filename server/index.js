"user strict";

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes.js");
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(router);
const Port = 3000;

(async function () {
  try {
    //connected to db
    await mongoose.connect("mongodb://127.0.0.1:27017/news_db");
    console.log("Connected to db");

    app.listen(Port, () => {
      console.log(`Server running at http://localhost:${Port}`);
    });
  } catch (error) {
    console.log(error);
  }
})();
